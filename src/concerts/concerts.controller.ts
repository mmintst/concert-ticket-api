import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { CreateConcertDto } from './dto/create-concert.dto';
import { Concert } from './entities/concert.entity';
import { ConcertActionDto } from './dto/update-concert.dto';

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Get()
  getConcerts() {
    return this.concertsService.getConcerts();
  }

  @Get(':id')
  getConcert(@Param('id', ParseIntPipe) id: number): Concert {
    return this.concertsService.getConcert(id);
  }

  @Post()
  createConcert(
    @Body(new ValidationPipe()) createConcertDto: CreateConcertDto,
  ): Concert {
    return this.concertsService.createConcert(createConcertDto);
  }

  // for user to reserve or cancel concert
  @Patch(':id')
  updateConcert(
    @Param('id', ParseIntPipe) id: number,
    @Body() concertActionDto: ConcertActionDto,
  ): Concert {
    const toBeUpdatedConcert = this.concertsService.getConcert(id);
    if (
      concertActionDto.action === 'reserve' &&
      toBeUpdatedConcert.reservedSeats === toBeUpdatedConcert.totalSeats
    ) {
      throw new ForbiddenException();
    }
    return this.concertsService.updateConcert(id, concertActionDto);
  }

  @Delete(':id')
  removeConcert(@Param('id', ParseIntPipe) id: number) {
    return this.concertsService.removeConcert(id);
  }
}
