import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegistroService } from './registro.service.js';
import { ResponseMessage } from '../../core/decorators/response-message.decorator.js';
import { RegistroDto } from './dto/registro.dto.js';
import { Registrador } from '../../core/entities/registrador.entity.js';
import { Evento } from '../../core/entities/evento.entity.js';

@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Post('crear')
  @ResponseMessage('Registro creado con éxito')
  async register(@Body() registro: RegistroDto) {
    await this.registroService.register(registro);
    return registro;
  }

  @Get('registradores-activos')
  @ResponseMessage('Lista de registradores activos')
  async getRegistradoresActivos(): Promise<Registrador[]> {
    return await this.registroService.getRegistradoresActivos();
  }

  @Get('eventos-activos')
  @ResponseMessage('Lista de eventos activos')
  async getEventosActivos(): Promise<Evento[]> {
    return await this.registroService.getEventosActivos();
  }

  @Get('listar')
  @ResponseMessage('Lista completa de registros con ubicación y registrador')
  async listarRegistros() {
    return await this.registroService.listarRegistrosDetallados();
  }
}
