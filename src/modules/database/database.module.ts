import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Database } from '../../core/entities/database.entity.js';
import { DatabaseController } from './database.controller.js';
import { DatabaseService } from './database.service.js';
import { Registrador } from '../../core/entities/registrador.entity.js';
import { Evento } from '../../core/entities/evento.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Database, Registrador, Evento])],
  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class DatabaseModule {}
