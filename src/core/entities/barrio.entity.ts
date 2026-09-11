import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
import type { Canton } from './canton.entity.js';
import type { Registro } from './registro,entity.js';


@Entity('barrio')
export class Barrio {

    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id: number;

    @Column({
        name: 'canton_id'
    })
    cantonId: number;

    @Column({
        name: 'nombre',
        length: 150
    })
    nombre: string;

    @Column({
        name: 'estado',
        length: 1,
        default: 'A'
    })
    estado: string;

    @ManyToOne('Canton', (canton: Canton) => canton.barrios)
    @JoinColumn({ name: 'canton_id' })
    canton: Canton;

    @OneToMany('Registro', (registro: Registro) => registro.barrio)
    registros: Registro[];
}