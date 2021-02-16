import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { CreateStickerkDto } from './dto/create-sticker.dto';
import { StickersService } from './stickers.service';
import {Sticker} from './sticker.model';

@Controller('Carparkmanagementsystem/stickers')
export class StickersController{
    constructor(private readonly stickersService:StickersService){}

    @Post()
    create(@Body() createStickerDto:CreateStickerkDto): Promise<Sticker> {
        return this.stickersService.create(createStickerDto);
    }

    @Get()
    findAll(): Promise<Sticker[]>{
        return this.stickersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Sticker>{
        return this.stickersService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id:string): Promise<void>{
        return this.stickersService.remove(id);
    }
}