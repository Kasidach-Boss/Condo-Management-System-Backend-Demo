import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {CreateStickerkDto} from './dto/create-sticker.dto';
import { Sticker } from './sticker.model';

@Injectable()
export class StickersService{
    constructor(
        @InjectModel(Sticker)
        private readonly stickerModel: typeof Sticker,        
    ){}
    create(createStickerDto: CreateStickerkDto): Promise<Sticker>{
        const sticker = new Sticker();
        sticker.stickerno = createStickerDto.stickerno;
        sticker.type = createStickerDto.type;
        sticker.owner = createStickerDto.owner;
        sticker.carplate = createStickerDto.carplate;
        sticker.carbrand = createStickerDto.carbrand;
        sticker.carmodel = createStickerDto.carmodel;
        sticker.keycardno = createStickerDto.keycardno;
        return sticker.save();
    }

    async findAll(): Promise<Sticker[]>{
        return this.stickerModel.findAll();
    }

    findOne(id: string): Promise<Sticker>{
        return this.stickerModel.findOne({
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