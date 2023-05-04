import { Module } from '@nestjs/common';
import { JobsController } from './employers/jobs/jobs.controller';
import { TransactionsController } from './transactions/transactions.controller';

@Module({
  controllers: [JobsController, TransactionsController],
})
export class UsersModule {}
