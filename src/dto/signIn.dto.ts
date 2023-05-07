export enum UserTypes {
  Administrator,
  Cashier,
  Storage_worker,
  Cleaner,
}

export interface signInDto {
  login: string;
  password: string;
  userType: UserTypes;
}
