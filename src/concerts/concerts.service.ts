import { Injectable } from '@nestjs/common';
import { Concert } from './entities/concert.entity';

@Injectable()
export class ConcertsService {
  private concerts: Concert[] = [
    {
      id: 0,
      name: 'foo',
      description: 'bar',
      totalSeats: 200,
      reservedSeats: 100,
      cancelledSeats: 50,
    },
    {
      id: 1,
      name: 'fizz',
      description: 'buzz',
      totalSeats: 300,
      reservedSeats: 150,
      cancelledSeats: 70,
    },
  ];

  getConcerts(): Concert[] {
    return this.concerts;
  }
}
