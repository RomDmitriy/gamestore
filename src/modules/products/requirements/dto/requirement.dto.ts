import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export default class RequirementDto {
  @ApiProperty({
    example: 'jhdbrfgjdhfbgjhdb2b34jhbj23hb4jhb',
  })
  id: string;

  @ApiProperty({
    example: 'Минимальное количество ядер',
    minLength: 1,
    maxLength: 32,
  })
  @Length(1, 32)
  title: string;

  @ApiProperty({
    example: 'ед.',
    minLength: 0,
    maxLength: 8,
  })
  @Length(0, 8)
  unit: string;
}
