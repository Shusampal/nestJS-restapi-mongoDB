import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';

// import { Request, Response } from 'express';
// findAll(@Req() req: Request, @Res() res: Response)

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll() {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() params) {
        const { id } = params;
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemBody: CreateItemDto): string {
        return this.itemsService.createOne(createItemBody);
    }

    @Delete(':id')
    delete(@Param() params) {
        const { id } = params;
        return this.itemsService.deleteOne(id);
    }

    @Put(':id')
    update(@Param() params, @Body() updateItemDto: CreateItemDto) {
        const { id } = params;
        return this.itemsService.updateOne(updateItemDto);
    }

}
