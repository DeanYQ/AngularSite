export class AccountModel {
  Account: string;
  Password: string;
  Password2: string;
  Chaptcha: string;
}

export class ChangePasswordDto {
  AccountName: string;
  OriginalPassword: string;
  NewPassword: string;
  ConfirmNewPassword: string;
}
