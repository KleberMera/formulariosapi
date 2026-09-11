import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './modules/database/database.module.js';
import { ProvinciaModule } from './modules/provincia/provincia.module.js';
import { CantonModule } from './modules/canton/canton.module.js';
import { BarrioModule } from './modules/barrio/barrio.module.js';
import { RegistroModule } from './modules/registro/registro.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '120.40.73.63',
      port: 3306,
      username: 'server',
      password: 'Server2026%lalibertad..',
      database: 'formularios',
      // entities: [],
      // synchronize: true,
      autoLoadEntities: true,
            // timezone: 'America/Guayaquil',
              // timezone: 'Z', // UTC
  // o '-05:00' para Ecuador
    }),
    DatabaseModule,
    ProvinciaModule,
    CantonModule,
    BarrioModule,
    RegistroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
