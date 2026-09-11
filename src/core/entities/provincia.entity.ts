import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import type { Canton } from './canton.entity.js';
import type { Registro } from './registro,entity.js';

@Entity('provincia')
export class Provincia {

    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id: number;

    @Column({
        name: 'nombre',
        length: 100
    })
    nombre: string;

    @Column({
        name: 'estado',
        length: 1,
        default: 'A'
    })
    estado: string;

    @OneToMany('Canton', (canton: Canton) => canton.provincia)
    cantones: Canton[];

    @OneToMany('Registro', (registro: Registro) => registro.provincia)
    registros: Registro[];
}