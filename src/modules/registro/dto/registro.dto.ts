export class RegistroDto {
  cedula?: string;
  telefono?: string;
  nombres: string;
  apellidos: string;
  provinciaId?: number;
  cantonId?: number;
  barrioId?: number;
  registradorId: number;
  eventoId: number;
  observacion?: string;
  latitud?: number;
  longitud?: number;
}
