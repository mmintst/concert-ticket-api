import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { CreateConcertDto } from './dto/create-concert.dto';
import { Concert } from './entities/concert.entity';

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Get()
  getConcerts() {
    return this.concertsService.getConcerts;
  }

  @Post()
  createConcert(
    @Body(new ValidationPipe()) createConcertDto: CreateConcertDto,
  ): Concert {
    return this.concertsService.createConcert(createConcertDto);
  }

  @Patch()
  updateConcert() {
    return '';
  }

  @Delete()
  removeConcert() {
    return '';
  }
}
