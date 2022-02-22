import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item , ItemSchema } from './schemas/item.schema';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }

    async findAll(): Promise<Item[]> {
        const query = this.itemModel.find();
        return await query.exec();
    };

    async findOne(id: string): Promise<Item> {
        try {
            const query =  this.itemModel.findOne({ _id: id });
            const item =  await query.exec();
            return item;
        } catch (error) {
            throw new NotFoundException('could not find product');
        }
    }

    async createOne(body:Item) {
        const doc = new this.itemModel(body);
        await doc.save();
        return doc;
    }

    async deleteOne(id:string) {
        const query = this.itemModel.findByIdAndDelete(id);
        return await query.exec();
        
    }

    async updateOne(id,body) {
        const query = this.itemModel.findByIdAndUpdate(id,body,{new:true});
        return await query.exec();
    }

}
