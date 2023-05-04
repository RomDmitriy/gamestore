import { Module } from '@nestjs/common';
import { StoragesController } from './storages/storages.controller';

@Module({
  controllers: [StoragesController],
})
export class StoresModule {}
