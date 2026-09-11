import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Database } from '../../core/entities/database.entity.js';
import { DatabaseController } from './database.controller.js';
import { DatabaseService } from './database.service.js';
import { Provincia } from '../../core/entities/provincia.entity.js';
import { Canton } from '../../core/entities/canton.entity.js';
import { Barrio } from '../../core/entities/barrio.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Database, Provincia, Canton, Barrio])],
  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class DatabaseModule {}
