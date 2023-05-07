export enum UserTypes {
  Administrator,
  Cashier,
  Storage_worker,
  Cleaner,
}

export default interface signInDto {
  login: string;
  password: string;
  userType: UserTypes;
}
