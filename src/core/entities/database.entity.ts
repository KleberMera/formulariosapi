import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('database')
export class Database {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'nombre',
    length: 150,
  })
  nombre: string;

  @Column({
    name: 'descripcion',
    length: 255,
    nullable: true,
  })
  descripcion: string;

  @Column({
    name: 'logo',
    length: 255,
    nullable: true,
  })
  logo: string;

  @Column({
    name: 'estado',
    length: 1,
    default: 'A',
  })
  estado: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
