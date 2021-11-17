/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, NotFoundException, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        { id: 1, name: 'Cappuccino', price: 12, brand: 'North End', flavors: ['vanilla', 'chocolate'] },
        { id: 2, name: 'Latte', price: 10, brand: 'Starbucks', flavors: ['vanilla', 'caramel'] },
        { id: 3, name: 'Americano', price: 8, brand: 'Starbucks', flavors: ['vanilla'] },
        { id: 4, name: 'Macchiato', price: 10, brand: 'Starbucks', flavors: ['vanilla', 'caramel'] },
        { id: 5, name: 'Mocha', price: 12, brand: 'Starbucks', flavors: ['vanilla', 'chocolate'] },
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        throw 'A random error';
        const coffee = this.coffees.find(coffee => coffee.id === +id);
        if (!coffee) {
            // throw new HttpException(`Coffee #${id} not found`,HttpStatus.NOT_FOUND);
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }

    update(id: string, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {

        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
