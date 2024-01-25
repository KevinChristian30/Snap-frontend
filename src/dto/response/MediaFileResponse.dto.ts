export default class MediaFileResponseDTO {
  constructor(
    public id: string,
    public fileName: string,
    public fileType: string,
    public fileURL: string,
  ) {}
}
