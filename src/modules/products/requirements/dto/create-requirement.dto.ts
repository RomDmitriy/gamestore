import { OmitType } from '@nestjs/swagger';
import RequirementDto from './requirement.dto';

export default class CreateRequirementDto extends OmitType(RequirementDto, ['id']) {}
