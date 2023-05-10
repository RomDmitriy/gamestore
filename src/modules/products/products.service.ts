import { BadRequestException, Injectable } from '@nestjs/common';
import CreateProductDto from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import ProductDto from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  //TODO: доделать
  async create(createProductDto: CreateProductDto) {
    // await this.prismaService.products.create({
    //   data: {
    //   }
    // });
  }

  async findAll(count: number, offset: number): Promise<ProductDto[]> {
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

  async findOne(id: string): Promise<ProductDto> {
    if (id === undefined) throw new BadRequestException();

    return this.prismaService.products.findFirstOrThrow({
      where: {
        id: id,
      },
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

  //TODO: доделать
  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
