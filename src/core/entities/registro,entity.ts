import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({
    name: 'fecha',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
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
}
