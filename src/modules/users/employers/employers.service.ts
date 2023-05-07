import { Injectable } from '@nestjs/common';
import signUpEmployerDto from 'src/dto/signUpEmployer.dto';

@Injectable()
export class EmployersService {
  async makeAnEmployerAnAdmin(
    signUpEmployerInfo: signUpEmployerDto,
  ): Promise<void> {
    //TODO: доделать
    return null;
  }
}
