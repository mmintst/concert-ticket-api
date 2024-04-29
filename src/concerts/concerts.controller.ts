import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  NotFoundException,
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
    try {
      return this.concertsService.getConcerts();
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  getConcert(@Param('id', ParseIntPipe) id: number): Concert {
    try {
      return this.concertsService.getConcert(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Post()
  createConcert(
    @Body(new ValidationPipe()) createConcertDto: CreateConcertDto,
  ): Concert {
    try {
      return this.concertsService.createConcert(createConcertDto);
    } catch (err) {
      throw new ForbiddenException();
    }
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
    try {
      return this.concertsService.removeConcert(id);
    } catch (err) {
      throw new ForbiddenException();
    }
  }
}
