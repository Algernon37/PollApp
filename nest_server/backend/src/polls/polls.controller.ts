import { Controller, Get, Post, Param, Body, Patch } from '@nestjs/common';
import { PollsService } from './polls.service';
import { Poll } from './poll.entity';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}

  @Get()
  findAll() {
    return this.pollsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pollsService.findOne(id);
  }

  @Post()
  create(@Body() poll: Poll) {
    return this.pollsService.create(poll);
  }

  @Patch('vote/:optionId')
  vote(@Param('optionId') optionId: string) {
    return this.pollsService.vote(optionId);
  }
}
