import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import ProductTypeDto from './dto/product-type.dto';

@Injectable()
export class ProductTypesService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(count: number, offset: number): Promise<ProductTypeDto[]> {
    if (count === undefined || isNaN(count) || count === 0) count = null;
    if (offset === undefined || isNaN(offset)) count = null;

    return this.prismaService.products.findMany({
      take: count,
      skip: offset,
      select: {
        id: true,
        title: true,
        description: true,
        release_date: true,
        type: true,
        supplier: {
          select: {
            title: true,
          },
        },
        sales_stopped: true,
        price: true,
      },
    });
  }
}
