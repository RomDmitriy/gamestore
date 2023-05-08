import { Injectable } from '@nestjs/common';
import signUpEmployerDto from 'src/modules/auth/dto/sign-up-employer.dto';

@Injectable()
export class EmployersService {
  async makeAnEmployerAnAdmin(
    signUpEmployerInfo: signUpEmployerDto,
  ): Promise<void> {
    //TODO: доделать
    return null;
  }
}
