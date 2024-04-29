import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoryService {
  private histories: History[] = [];
  getHistory(): History[] {
    return this.histories;
  }
}
