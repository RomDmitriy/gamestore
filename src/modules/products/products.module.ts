import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { RequirementsController } from './requirements/requirements.controller';
import { ProductTypesController } from './product_types/product_types.controller';

@Module({
  controllers: [
    ProductsController,
    RequirementsController,
    ProductTypesController,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
