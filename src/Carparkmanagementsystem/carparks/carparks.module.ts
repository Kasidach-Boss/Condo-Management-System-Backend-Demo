import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {CarparksService} from './carparks.service';
import {CarparksController} from './carparks.controller';
import { Carpark } from './carpark.model';


@Module({
    imports :[SequelizeModule.forFeature([Carpark])],
    providers: [CarparksService],
    controllers: [CarparksController],
})

export class CarparksModule {}