export class History {
  id: number;
  dateTime: Date;
  username: string;
  concertName: string;
  action: 'reserve' | 'cancel';
}
