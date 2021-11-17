/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService) {

    }

    @Get()
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
        // return 'This action returns all coffees ' + limit+ ' ' + offset;
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coffeesService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        return this.coffeesService.create(body);
        //return 'This action adds a new coffee';
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }




}
