import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
    private items = [];

    findAll(): {
        id: number;
        name: string;
        qty: number;
        description: string;
    }[] {
        return this.items;
    };

    findOne(id: string) {
        return this.items.find(item => item.id === +id);
    }

    createOne(body: CreateItemDto) {
        this.items.push(body);
        return 'success';

    }

    deleteOne(id: string | number) {
        this.items = this.items.filter(item => item.id !== +id);
        return this.items;
    }

    updateOne(updatedObj: CreateItemDto) {
        this.items = this.items.filter(item => item.id !== +updatedObj.id);
        this.items.push(updatedObj);
        return this.items;
    }


}
