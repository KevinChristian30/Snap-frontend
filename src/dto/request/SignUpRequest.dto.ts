export default class SignUpRequestDTO {
  constructor(public email: string, public first_name: string, public username: string, public password: string, public confirm_password: string) { }
}