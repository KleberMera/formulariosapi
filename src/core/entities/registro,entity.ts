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
  cedula: string | null;

  @Column({
    name: 'telefono',
    length: 10,
    nullable: true,
  })
  telefono: string | null;

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
  provinciaId: number | null;

  @Column({
    name: 'canton_id',
    nullable: true,
  })
  cantonId: number | null;

  @Column({
    name: 'barrio_id',
    nullable: true,
  })
  barrioId: number | null;

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
    nullable: true, // opcional
  })
  latitud: number | null;

  @Column({
    name: 'longitud',
    type: 'decimal',
    nullable: true, // opcional
  })
  longitud: number | null;

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
  observacion: string | null;
}
