import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lot } from './lot.model';
import { LotsController } from './lots.controller';
import { LotsService } from './lots.service';


@Module({
    imports :[SequelizeModule.forFeature([Lot])],
    providers: [LotsService],
    controllers: [LotsController],
})

export class LotsModule {}