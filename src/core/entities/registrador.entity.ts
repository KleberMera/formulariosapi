import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import type { Registro } from './registro,entity.js';

@Entity('registrador')
export class Registrador {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'nombres',
    length: 150,
    nullable: false,
  })
  nombres: string;

  @Column({
    name: 'apellidos',
    length: 150,
    nullable: false,
  })
  apellidos: string;

  @Column({
    name: 'cedula',
    length: 10,
    nullable: true, // cedula opcional
  })
  cedula: string;

  @Column({
    name: 'celular',
    length: 10,
    nullable: true, // celular opcional
  })
  celular: string;

  @Column({
    name: 'estado',
    length: 1,
    default: 'A', // por defecto 'A'
  })
  estado: string;

  @OneToMany('Registro', (registro: Registro) => registro.registrador)
  registros: Registro[];
}
