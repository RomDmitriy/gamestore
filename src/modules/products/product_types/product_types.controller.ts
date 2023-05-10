import { Controller, Get, Query } from '@nestjs/common';
import { ProductTypesService } from './product_types.service';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import ProductTypeDto from './dto/product-type.dto';

@ApiTags('Products - Types')
@Controller('product_types')
export class ProductTypesController {
  constructor(private readonly productTypesService: ProductTypesService) {}

  @ApiOperation({ summary: 'Получить все товары' })
  @ApiQuery({
    name: 'count',
    required: false,
    type: Number,
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Возврат товаров по заданным параметрам',
    type: [ProductTypeDto],
  })
  @Get()
  findAll(@Query('count') count: number, @Query('offset') offset: number): Promise<ProductTypeDto[]> {
    return this.productTypesService.findAll(count, offset);
  }
}
