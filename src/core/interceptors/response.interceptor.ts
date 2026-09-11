/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RESPONSE_MESSAGE } from '../decorators/response-message.decorator.js';

export interface Response<T> {
  data: T;
  message: string;
  status: number;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  constructor(private reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest();

    // if (this.isRegistrationRequest(request.method, request.path)) {
    //   request.body = this.uppercaseStrings(request.body);
    // }

    request.body = this.uppercaseStrings(request.body);

    const response = context.switchToHttp().getResponse();
    const statusCode = response.statusCode;

    const message =
      this.reflector.get<string>(RESPONSE_MESSAGE, context.getHandler()) ||
      'Operación realizada con éxito';

    return next.handle().pipe(
      map((data) => ({
        data: this.transform(data),
        message,
        status: statusCode,
      })),
    );
  }

  private isRegistrationRequest(method: string, path: string): boolean {
    if (method !== 'POST') {
      return false;
    }

    return /\/(register|register-masivo|registrar)(\/|$)/i.test(path);
  }

  private uppercaseStrings(value: any): any {
    if (Array.isArray(value)) {
      return value.map((item) => this.uppercaseStrings(item));
    }

    if (value !== null && typeof value === 'object') {
      for (const key of Object.keys(value)) {
        value[key] = this.uppercaseStrings(value[key]);
      }
      return value;
    }

    return typeof value === 'string' ? value.toLocaleUpperCase('es-EC') : value;
  }

  private transform(data: any): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.transform(item));
    }
    if (data !== null && typeof data === 'object' && !(data instanceof Date)) {
      const transformed: any = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          transformed[key] = this.transform(data[key]);
        }
      }
      return transformed;
    }
    if (typeof data === 'string') {
      return this.toTitleCase(data);
    }
    return data;
  }

  private toTitleCase(str: string): string {
    // Si es un código corto (ej: 'S', 'N', 'A') o parece un ID/URL, no lo transformamos
    if (str.length <= 3 || str.includes('/') || str.includes('://')) {
      return str;
    }

    // Dividir por espacios y transformar cada palabra
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => {
        if (word.length === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
}
