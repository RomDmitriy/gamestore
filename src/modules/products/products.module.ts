import { Module } from '@nestjs/common';
import { ProductTypesController } from './product_types/product_types.controller';
import { RequirementsController } from './requirements/requirements.controller';

@Module({
  controllers: [ProductTypesController, RequirementsController],
})
export class ProductsModule {}
