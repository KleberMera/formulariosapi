import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Registro } from '../../core/entities/registro,entity.js';
import { Repository } from 'typeorm';
import { RegistroDto } from './dto/registro.dto.js';
import { Registrador } from '../../core/entities/registrador.entity.js';
import { Evento } from '../../core/entities/evento.entity.js';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private readonly registroRepository: Repository<Registro>,
    @InjectRepository(Registrador)
    private readonly registradorRepository: Repository<Registrador>,
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  async register(registro: RegistroDto): Promise<Registro> {
    // Validar si ya existe un registro con la misma cédula y evento
    if (registro.cedula) {
      const existe = await this.registroRepository.findOne({
        where: { cedula: registro.cedula, eventoId: registro.eventoId },
      });
      if (existe) {
        throw new BadRequestException(
          'La cédula ya se encuentra registrada en este evento.',
        );
      }
    }

    // Crear registro
    const nuevoRegistro = this.registroRepository.create({
      cedula: registro.cedula,
      telefono: registro.telefono,
      nombres: registro.nombres,
      apellidos: registro.apellidos,
      provinciaId: registro.provinciaId,
      cantonId: registro.cantonId,
      barrioId: registro.barrioId,
      registradorId: registro.registradorId,
      eventoId: registro.eventoId,
      observacion: registro.observacion,
      latitud: registro.latitud,
      longitud: registro.longitud,
      estado: 'A',
    });

    return await this.registroRepository.save(nuevoRegistro);
  }

  async getRegistradoresActivos(): Promise<Registrador[]> {
    return await this.registradorRepository.find({
      where: { estado: 'A' },
    });
  }

  async getEventosActivos(): Promise<Evento[]> {
    return await this.eventoRepository.find({
      where: { estado: 'A' },
    });
  }


async listarRegistrosDetallados() {
  return await this.registroRepository
    .createQueryBuilder('r')
    .leftJoinAndSelect('r.provincia', 'provincia')
    .leftJoinAndSelect('r.canton', 'canton')
    .leftJoinAndSelect('r.barrio', 'barrio')
    .leftJoinAndSelect('r.registrador', 'registrador')
    .select([
      'r.id AS r_id',
      'r.cedula AS r_cedula',
      'r.telefono AS r_telefono',
      'r.fecha AS r_fecha',
      'r.estado AS r_estado',
      'provincia.nombre AS provincia_nombre',
      'canton.nombre AS canton_nombre',
      'barrio.nombre AS barrio_nombre',
    ])
    .addSelect("CONCAT( r.nombres, ' ', r.apellidos)", 'usuario')
    .addSelect("CONCAT(registrador.nombres, ' ', registrador.apellidos)", 'registrador_nombre')
    .where('r.estado = :estado', { estado: 'A' })
    .orderBy('r.id', 'DESC')
    .getRawMany();
}

}
