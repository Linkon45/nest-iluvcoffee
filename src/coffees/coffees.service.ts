/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
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

    findAll(){
        return this.coffees;
    }

    findOne(id: string){
        return this.coffees.find(coffee => coffee.id === +id);
    }

    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto);
    }

    update(id: string, updateCoffeeDto: any){
        const existingCoffee = this.findOne(id);
        if(existingCoffee){
          
        }
    }

    remove(id: string){
        const coffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
        if(coffeeIndex >=0){
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
