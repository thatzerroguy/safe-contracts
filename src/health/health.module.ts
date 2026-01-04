import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
  imports: [TerminusModule, HttpModule],
})
export class HealthModule {}
