import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Database } from '../../core/entities/database.entity.js';
import { DatabaseController } from './database.controller.js';
import { DatabaseService } from './database.service.js';


@Module({
  imports: [TypeOrmModule.forFeature([Database])],
  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class DatabaseModule {}
