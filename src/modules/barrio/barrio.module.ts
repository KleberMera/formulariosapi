import { Module } from '@nestjs/common';
import { BarrioService } from './barrio.service.js';
import { BarrioController } from './barrio.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Barrio } from '../../core/entities/barrio.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Barrio])],
  controllers: [BarrioController],
  providers: [BarrioService],
})
export class BarrioModule {}
