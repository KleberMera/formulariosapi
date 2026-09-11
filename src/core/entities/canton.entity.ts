import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import type { Provincia } from './provincia.entity.js';
import type { Barrio } from './barrio.entity.js';

@Entity('canton')
export class Canton {

    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id: number;

    @Column({
        name: 'provincia_id'
    })
    provinciaId: number;

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

    @ManyToOne('Provincia', (provincia: Provincia) => provincia.cantones)
    @JoinColumn({ name: 'provincia_id' })
    provincia: Provincia;

    @OneToMany('Barrio', (barrio: Barrio) => barrio.canton)
    barrios: Barrio[];
}