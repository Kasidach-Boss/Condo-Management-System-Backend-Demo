import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from './users/users.module';
import {SequelizeModule} from '@nestjs/sequelize';
import {LotsModule} from './Carparkmanagementsystem/lots/lots.module';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'condomanagement_demo',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,LotsModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
