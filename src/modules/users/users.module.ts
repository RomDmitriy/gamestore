import { Module } from '@nestjs/common';
import { JobsController } from './employers/jobs/jobs.controller';
import { TransactionsController } from './transactions/transactions.controller';
import { EmployersService } from './employers/employers.service';
import { EmployersController } from './employers/employers.controller';

@Module({
  controllers: [EmployersController, JobsController, TransactionsController],
  providers: [EmployersService],
})
export class UsersModule {}
