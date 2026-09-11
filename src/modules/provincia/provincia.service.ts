import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provincia } from '../../core/entities/provincia.entity.js';

@Injectable()
export class ProvinciaService {
  constructor(
    @InjectRepository(Provincia)
    private readonly provinciaRepository: Repository<Provincia>,
  ) {}

  async findAll(): Promise<Provincia[]> {
    return await this.provinciaRepository.find({
      where: {
        estado: 'A',
      },
      order: {
        estado: 'ASC',
      },
    });
  }
}
