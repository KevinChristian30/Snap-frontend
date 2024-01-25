export default class UserDetailsResponseDTO {
  constructor(
    public id: string,
    public email: string,
    public first_name: string,
    public last_name: string,
    public username: string,
    public bio: string,
  ) {}
}
