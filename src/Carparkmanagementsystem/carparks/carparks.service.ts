import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {  CreateCarparkDto } from './dto/create-carpark.dto';

import { Carpark } from './carpark.model';

@Injectable()
export class CarparksService{
    constructor(
        @InjectModel(Carpark)
        private readonly carparkModel: typeof Carpark,        
    ){}
    create(createCarparkDto: CreateCarparkDto): Promise<Carpark>{
        const carpark = new Carpark();
        carpark.roomid = createCarparkDto.roomid;
        carpark.red = parseInt(createCarparkDto.red);
        carpark.green = parseInt(createCarparkDto.green);
        carpark.lotno1 = createCarparkDto.lotno1;
        carpark.lotno2 = createCarparkDto.lotno2;
        carpark.lotno3 = createCarparkDto.lotno3;
        return carpark.save();
    }

    async findAll(): Promise<Carpark[]>{
        return this.carparkModel.findAll();
    }

    findOne(id: string): Promise<Carpark>{
        return this.carparkModel.findOne({
            where:{
                id,
            }
        })
    }
    async remove(id:string): Promise<void>{
        const carpark = await this.findOne(id);
        await carpark.destroy();
    }
}