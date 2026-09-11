import { Controller } from '@nestjs/common';
import { RegistroService } from './registro.service.js';

@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}
}
