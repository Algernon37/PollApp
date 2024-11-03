import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollGateway } from './polls/poll.gateway';  
import { PollsModule } from './polls/polls.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      port: 5432,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PollsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PollGateway],
})
export class AppModule {}
