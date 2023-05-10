import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequirementsService } from './requirements.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import CreateRequirementDto from './dto/create-requirement.dto';
import RequirementDto from './dto/requirement.dto';
import UpdateRequirementDto from './dto/update-requirement.dto';

@ApiTags('Products - Requirements')
@Controller('requirements')
export class RequirementsController {
  constructor(private readonly requirementsService: RequirementsService) {}

  @ApiOperation({ summary: 'Добавить новое требование' })
  @ApiResponse({
    status: 201,
    description: 'Требование добавлено',
  })
  @Post()
  create(@Body() createRequirementDto: CreateRequirementDto) {
    return this.requirementsService.create(createRequirementDto);
  }

  @ApiOperation({ summary: 'Получить все виды требований' })
  @ApiResponse({
    status: 200,
    description: 'Возврат массива требований',
    type: [RequirementDto],
  })
  @Get()
  findAll(): Promise<RequirementDto[]> {
    return this.requirementsService.findAll();
  }

  @ApiOperation({ summary: 'Получить определённое требование' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Возврат требования с заданным id',
    type: RequirementDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<RequirementDto> {
    return this.requirementsService.findOne(id);
  }

  @ApiOperation({ summary: 'Обновить определённое требование' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Требование с заданным id обновлено',
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateRequirementDto) {
    return this.requirementsService.update(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Удалить определённое требование из базы' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Требование с заданным id удалено',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requirementsService.remove(id);
  }
}
