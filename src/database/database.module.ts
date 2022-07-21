import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { MysqlTypeORMConfigService } from './mysql-typeorm-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MysqlTypeORMConfigService,
    }),
  ],
})
export class DatabaseModule {}
