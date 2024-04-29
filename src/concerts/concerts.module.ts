import { Module } from '@nestjs/common';
import { ConcertsController } from './concerts.controller';
import { ConcertsService } from './concerts.service';
import { HistoryModule } from 'src/history/history.module';

@Module({
  imports: [HistoryModule],
  controllers: [ConcertsController],
  providers: [ConcertsService],
})
export class ConcertsModule {}
