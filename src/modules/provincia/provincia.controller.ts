import { Controller, Get } from '@nestjs/common';
import { ProvinciaService } from './provincia.service.js';

@Controller('provincia')
export class ProvinciaController {
  constructor(
        private readonly provinciaService: ProvinciaService
    ) {}

    @Get()
    findAll() {
        return this.provinciaService.findAll();
    }

}
