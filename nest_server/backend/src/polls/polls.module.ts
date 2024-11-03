import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PollsController } from './polls.controller';
import { PollsService } from './polls.service';
import { Poll } from './poll.entity';
import { Option } from './option.entity';
import { PollGateway } from './poll.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poll, Option]), 
  ],
  controllers: [PollsController],
  providers: [PollsService, PollGateway],
})
export class PollsModule {}
