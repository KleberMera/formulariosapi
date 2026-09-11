import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Provincia } from './provincia.entity.js';
import { Canton } from './canton.entity.js';
import { Barrio } from './barrio.entity.js';
import { Registrador } from './registrador.entity.js';
import { Evento } from './evento.entity.js';

@Entity('registro')
export class Registro {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'cedula',
    length: 10,
    nullable: true,
  })
  cedula: string;

  @Column({
    name: 'telefono',
    length: 10,
    nullable: true,
  })
  telefono: string;

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
    name: 'provincia_id',
    nullable: true,
  })
  provinciaId: number;

  @Column({
    name: 'canton_id',
    nullable: true,
  })
  cantonId: number;

  @Column({
    name: 'barrio_id',
    nullable: true,
  })
  barrioId: number;

  @Column({
    name: 'registrador_id',
    nullable: false,
  })
  registradorId: number;

  @Column({
    name: 'evento_id',
    nullable: false,
  })
  eventoId: number;

  // @Column({
  //   name: 'fecha',
  //   type: 'timestamp',
  //   default: () => 'CURRENT_TIMESTAMP',
  //   nullable: false,
  // })
  // fecha: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    transformer: {
      to: (value: Date) => value, // se guarda tal cual
      from: (value: Date) => {
        // ajustar manualmente la zona horaria al leer
        return new Date(
          value.toLocaleString('en-US', { timeZone: 'America/Guayaquil' }),
        );
      },
    },
  })
  fecha: Date;

  @Column({
    name: 'latitud',
    type: 'decimal',
    precision: 11,
    scale: 8,
    nullable: true, // opcional
  })
  latitud: number;

  @Column({
    name: 'longitud',
    type: 'decimal',
    precision: 11,
    scale: 8,
    nullable: true, // opcional
  })
  longitud: number;

  @Column({
    name: 'estado',
    length: 1,
    default: 'A',
  })
  estado: string;

  @Column({
    name: 'observacion',
    length: 500,
    nullable: true, // opcional
  })
  observacion: string;

  @Column({
    name: 'codigo',
    length: 500,
    nullable: true, // opcional
  })
  codigo: string;

  // Relaciones
  @ManyToOne(() => Provincia, (provincia) => provincia.registros)
  @JoinColumn({ name: 'provincia_id' })
  provincia: Provincia;

  @ManyToOne(() => Canton, (canton) => canton.registros)
  @JoinColumn({ name: 'canton_id' })
  canton: Canton;

  @ManyToOne(() => Barrio, (barrio) => barrio.registros)
  @JoinColumn({ name: 'barrio_id' })
  barrio: Barrio;

  @ManyToOne(() => Registrador, (registrador) => registrador.registros)
  @JoinColumn({ name: 'registrador_id' })
  registrador: Registrador;

  @ManyToOne(() => Evento, (evento) => evento.registros)
  @JoinColumn({ name: 'evento_id' })
  evento: Evento;
}
