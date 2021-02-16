import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { CreateLotDto } from './dto/create-lot.dto';
import { LotsService } from './lots.service';
import {Lot} from './lot.model';

@Controller('Carparkmanagementsystem/lots')
export class LotsController{
    constructor(private readonly lotsService:LotsService){}

    @Post()
    create(@Body() createLotDto:CreateLotDto): Promise<Lot> {
        return this.lotsService.create(createLotDto);
    }

    @Get()
    findAll(): Promise<Lot[]>{
        return this.lotsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Lot>{
        return this.lotsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id:string): Promise<void>{
        return this.lotsService.remove(id);
    }
}