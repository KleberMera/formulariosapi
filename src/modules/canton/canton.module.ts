import { Module } from '@nestjs/common';
import { CantonService } from './canton.service.js';
import { CantonController } from './canton.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Canton } from '../../core/entities/canton.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Canton])],
  controllers: [CantonController],
  providers: [CantonService],
})
export class CantonModule {}
