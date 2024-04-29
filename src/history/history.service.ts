import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { v4 as uuidv4 } from 'uuid';
import { History } from './entities/history.entity';

@Injectable()
export class HistoryService {
  private histories: History[] = [];
  getHistory(): History[] {
    return this.histories;
  }

  createHistory(createHistoryDto: CreateHistoryDto): History {
    const newHistory = {
      ...createHistoryDto,
      id: uuidv4(),
    };
    this.histories.push(newHistory);

    return newHistory;
  }
}
