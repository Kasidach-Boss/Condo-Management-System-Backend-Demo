import { Column, Table,Model } from 'sequelize-typescript';

@Table
export class Carpark extends Model<Carpark>{
    
    @Column
    roomid: string;
    
    @Column
    red:number;

    @Column
    green:number;

    @Column
    lotno1: string;
    
    @Column
    lotno2: string;

    @Column
    lotno3: string;

}