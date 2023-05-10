import { PartialType } from '@nestjs/swagger';
import ProductDto from './product.dto';

export default class CreateProductDto extends PartialType(ProductDto) {}
