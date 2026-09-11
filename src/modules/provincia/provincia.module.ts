import { Module } from '@nestjs/common';
import { ProvinciaService } from './provincia.service.js';
import { ProvinciaController } from './provincia.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provincia } from '../../core/entities/provincia.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Provincia])],
  controllers: [ProvinciaController],
  providers: [ProvinciaService],
})
export class ProvinciaModule {}
