import { BadRequestException, Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import CreateRequirementDto from './dto/create-requirement.dto';
import RequirementDto from './dto/requirement.dto';
import UpdateRequirementDto from './dto/update-requirement.dto';

@Injectable()
export class RequirementsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProductDto: CreateRequirementDto): Promise<void> {
    await this.prismaService.requirements
      .create({
        data: createProductDto,
      })
      .catch(() => {
        throw new ConflictException();
      });
  }

  async findAll(): Promise<RequirementDto[]> {
    return this.prismaService.requirements.findMany({
      select: {
        id: true,
        title: true,
        unit: true,
      },
    });
  }

  async findOne(id: string): Promise<RequirementDto> {
    if (id === undefined) throw new BadRequestException();

    return this.prismaService.requirements.findFirstOrThrow({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        unit: true,
      },
    });
  }

  async update(id: string, updateProductDto: UpdateRequirementDto) {
    const requirement = await this.prismaService.requirements.update({
      where: {
        id: id,
      },
      data: updateProductDto,
    });

    if (requirement === null) throw new NotFoundException();
  }

  async remove(id: string) {
    const requirement = await this.prismaService.requirements.delete({
      where: {
        id: id,
      },
    });

    if (requirement === null) throw new NotFoundException();
  }
}
