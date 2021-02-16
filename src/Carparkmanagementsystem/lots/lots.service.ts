import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {  CreateLotDto } from './dto/create-lot.dto';
import {  Lot } from './lot.model';

@Injectable()
export class LotsService{
    constructor(
        @InjectModel(Lot)
        private readonly lotModel: typeof Lot,        
    ){}
    create(createLotDto: CreateLotDto): Promise<Lot>{
        const lot = new Lot();
        lot.lotno = createLotDto.lotno;
        lot.floor = createLotDto.floor;
        lot.owner = createLotDto.owner;
        return lot.save();
    }

    async findAll(): Promise<Lot[]>{
        return this.lotModel.findAll();
    }

    findOne(id: string): Promise<Lot>{
        return this.lotModel.findOne({
            where:{
                id,
            }
        })
    }
    async remove(id:string): Promise<void>{
        const lot = await this.findOne(id);
        await lot.destroy();
    }
}