import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poll } from './poll.entity';
import { Option } from './option.entity';

@Injectable()
export class PollsService {
  constructor(
    @InjectRepository(Poll) private pollRepository: Repository<Poll>,
    @InjectRepository(Option) private optionRepository: Repository<Option>,
  ) {}

  findAll() {
    return this.pollRepository.find({ relations: ['options'] });
  }

  findOne(id: string) {
    return this.pollRepository.findOne({ where: { id }, relations: ['options'] });
  }

  create(poll: Poll) {
    return this.pollRepository.save(poll);
  }

  async vote(optionId: string) {
    const option = await this.optionRepository.findOne({ where: { id: optionId } });
    if (option) {
      option.votes += 1;
      await this.optionRepository.save(option);
    }
  }
}
