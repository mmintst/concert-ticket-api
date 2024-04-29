export class CreateHistoryDto {
  dateTime: Date;
  username: string;
  concertName: string;
  action: 'reserve' | 'cancel';
}
