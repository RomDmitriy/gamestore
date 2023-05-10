import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { RequirementsController } from './requirements/requirements.controller';
import { RequirementsService } from './requirements/requirements.service';
import { ProductTypesService } from './product_types/product_types.service';
import { PrismaService } from 'src/prisma.service';
import { ProductTypesController } from './product_types/product_types.controller';

@Module({
  controllers: [ProductsController, RequirementsController, ProductTypesController],
  providers: [ProductsService, PrismaService, ProductTypesService, RequirementsService],
})
export class ProductsModule {}
