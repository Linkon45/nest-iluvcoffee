/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class CreateCoffeeDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly price: number;

    @IsString()
    readonly brand: string;

    @IsString({each: true})
    readonly flavors: string[];
}
