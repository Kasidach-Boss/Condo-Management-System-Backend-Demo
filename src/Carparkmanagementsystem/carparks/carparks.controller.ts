import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { CreateCarparkDto } from './dto/create-carpark.dto';
import {CarparksService} from './carparks.service';
import {Carpark} from './carpark.model';

@Controller('Carparkmanagementsystem/carparks')
export class CarparksController{
    constructor(private readonly carparksService:CarparksService){}

    @Post()
    create(@Body() createCarparkDto: CreateCarparkDto ): Promise<Carpark> {
        return this.carparksService.create( createCarparkDto );
    }

    @Get()
    findAll(): Promise<Carpark[]>{
        return this.carparksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Carpark>{
        return this.carparksService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id:string): Promise<void>{
        return this.carparksService.remove(id);
    }
}