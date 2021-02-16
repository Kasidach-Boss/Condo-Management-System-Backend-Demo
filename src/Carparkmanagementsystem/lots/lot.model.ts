import { Column, Table,Model } from 'sequelize-typescript';

@Table
export class Lot extends Model<Lot>{
    
    @Column
    lotno: string;

    @Column
    floor:string;

    @Column
    owner:string;
}