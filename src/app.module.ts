import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { EmployerController } from './employer/employer.controller';
import { StorageController } from './storage/storage.controller';
import { ClientController } from './client/client.controller';
import { ProductController } from './product/product.controller';
import { ProviderController } from './provider/provider.controller';
import { RequirementController } from './requirement/requirement.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, EmployerController, StorageController, ClientController, ProductController, ProviderController, RequirementController],
  providers: [AppService],
})
export class AppModule {}
