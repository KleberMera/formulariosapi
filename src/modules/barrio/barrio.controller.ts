import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BarrioService } from './barrio.service.js';

@Controller('barrio')
export class BarrioController {
 constructor(
        private readonly barrioService: BarrioService
    ) {}

    @Get('canton/:cantonId')
    findByCanton(
        @Param('cantonId', ParseIntPipe)
        cantonId: number
    ) {
        return this.barrioService.findByCanton(cantonId);
    }
}
