export default class CurrentUserResponseDTO {
  constructor(
    public email: string,
    public roles: string[],
    public username: string,
    public is_email_verified: boolean,
  ) {}
}
