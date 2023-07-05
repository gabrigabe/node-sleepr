import { Module } from '@nestjs/common';
import { CommonsService } from './commons.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  providers: [CommonsService],
  exports: [CommonsService],
  imports: [DatabaseModule, ConfigModule],
})
export class CommonsModule {}
