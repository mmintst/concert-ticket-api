import { Controller, Get, NotFoundException } from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from './entities/history.entity';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}
  @Get()
  getHistory(): History[] {
    try {
      return this.historyService.getHistory();
    } catch (err) {
      throw new NotFoundException();
    }
  }
}
