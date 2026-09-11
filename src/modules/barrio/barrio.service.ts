import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Barrio } from '../../core/entities/barrio.entity.js';

@Injectable()
export class BarrioService {


    constructor(
        @InjectRepository(Barrio)
        private readonly barrioRepository: Repository<Barrio>
    ) {}

    async findByCanton(cantonId: number): Promise<Barrio[]> {

        return await this.barrioRepository.find({
            where: {
                cantonId,
                estado: 'A'
            },
            order: {
                nombre: 'ASC'
            }
        });

    }
}
