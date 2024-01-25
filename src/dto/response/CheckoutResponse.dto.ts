export default class CheckoutResponseDTO {
  constructor(
    public token: string,
    public redirectURL: string,
  ) {}
}
