import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StickersController } from './stickers.controller';
import { StickersService } from './stickers.service';
import { Sticker } from './sticker.model';


@Module({
    imports :[SequelizeModule.forFeature([Sticker])],
    providers: [StickersService],
    controllers: [StickersController],
})

export class LotsModule {}