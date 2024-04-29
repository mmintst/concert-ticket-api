import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ConcertsService } from './concerts.service';

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  @Get()
  getConcerts() {
    return this.concertsService.getConcerts;
  }

  @Post()
  createConcert() {
    return '';
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
