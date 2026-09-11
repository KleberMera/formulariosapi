import { Module } from '@nestjs/common';
import { RegistroController } from './registro.controller.js';
import { RegistroService } from './registro.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro } from '../../core/entities/registro,entity.js';
import { Registrador } from '../../core/entities/registrador.entity.js';
import { Evento } from '../../core/entities/evento.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Registro, Registrador, Evento])],
  controllers: [RegistroController],
  providers: [RegistroService],
})
export class RegistroModule {}
