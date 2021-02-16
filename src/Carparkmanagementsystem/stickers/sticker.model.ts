import { Column, Table,Model } from 'sequelize-typescript';

@Table
export class Sticker extends Model<Sticker>{
    
    @Column
    stickerno: string;
    
    @Column
    type:string;

    @Column
    owner:string;

    @Column
    carplate: string;
    
    @Column
    carbrand: string;

    @Column
    carmodel: string;

    @Column
    keycardno: string;

}