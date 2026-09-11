import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CantonService } from './canton.service.js';

@Controller('canton')
export class CantonController {
 
  constructor(
        private readonly cantonService: CantonService
    ) {}

    @Get('provincia/:provinciaId')
    findByProvincia(
        @Param('provinciaId', ParseIntPipe)
        provinciaId: number
    ) {
        return this.cantonService.findByProvincia(provinciaId);
    }
}
