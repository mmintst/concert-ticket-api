import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcertsModule } from './concerts/concerts.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [ConcertsModule, HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
