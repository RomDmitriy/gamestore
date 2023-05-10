import { OmitType, PartialType } from '@nestjs/swagger';
import RequirementDto from './requirement.dto';

export default class UpdateRequirementDto extends PartialType(OmitType(RequirementDto, ['id'])) {}
