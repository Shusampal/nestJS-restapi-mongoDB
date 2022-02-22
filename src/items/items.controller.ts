import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './schemas/item.schema';

// import { Request, Response } from 'express';
// findAll(@Req() req: Request, @Res() res: Response)

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    async findAll() {
        return await this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params) {
        const { id } = params;
        return await this.itemsService.findOne(id);
    }

    @Post()
    async create(@Body() body:Item) {
        return await this.itemsService.createOne(body);
    }

    @Delete(':id')
    delete(@Param() param ) {
        const { id } = param;
        return this.itemsService.deleteOne(id);
    }

    @Patch(':id')
    update(@Body() body:Item , @Param() param) {
        const { id } = param;
        return this.itemsService.updateOne(id, body);
    }

}
