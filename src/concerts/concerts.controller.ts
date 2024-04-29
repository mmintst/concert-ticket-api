import {
  Body,
  Controller,
  Delete,
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

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Get()
  getConcerts() {
    return this.concertsService.getConcerts;
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

  @Patch()
  updateConcert() {
    return '';
  }

  @Delete()
  removeConcert() {
    return '';
  }
}
