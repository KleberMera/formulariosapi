import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Canton } from '../../core/entities/canton.entity.js';

@Injectable()
export class CantonService {
  constructor(
    @InjectRepository(Canton)
    private readonly cantonRepository: Repository<Canton>,
  ) {}

  async findByProvincia(provinciaId: number): Promise<Canton[]> {
    return await this.cantonRepository.find({
      where: {
        provinciaId,
        estado: 'A',
      },
      order: {
        nombre: 'ASC',
      },
    });
  }
}
