import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { StoresModule } from './modules/stores/stores.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, StoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
