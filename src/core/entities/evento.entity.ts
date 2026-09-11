import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import type { Registro } from './registro,entity.js';

@Entity('evento')
export class Evento {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'nombre',
    length: 150,
    nullable: false,
  })
  nombre: string;

  @Column({
    name: 'fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP', // equivalente a SYSDATE en SQL
    nullable: false,
  })
  fecha: Date;

  @Column({
    name: 'estado',
    length: 1,
    default: 'A', // por defecto 'A'
  })
  estado: string;

  @OneToMany('Registro', (registro: Registro) => registro.evento)
  registros: Registro[];
}
