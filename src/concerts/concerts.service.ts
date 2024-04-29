import { Injectable } from '@nestjs/common';
import { Concert } from './entities/concert.entity';
import { CreateConcertDto } from './dto/create-concert.dto';
import { v4 as uuidv4 } from 'uuid';

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

  getConcert(id: number): Concert {
    const concert = this.concerts.find((concert) => concert.id === id);

    return concert;
  }

  createConcert(createConcertDto: CreateConcertDto) {
    const newConcert = {
      ...createConcertDto,
      id: uuidv4,
      reservedSeats: 0,
      cancelledSeats: 0,
    };
    this.concerts.push(newConcert);

    return newConcert;
  }

  removeConcert(id: number) {
    const toBeRemoved = this.getConcert(id);

    this.concerts = this.concerts.filter((concert) => concert.id !== id);

    return toBeRemoved;
  }
}
