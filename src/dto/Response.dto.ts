export default class ResponseDTO<S, F> {
  constructor(public successful: boolean, public successPayload: S, public failurePayload: F) { }
}