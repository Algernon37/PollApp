import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Poll } from './poll.entity';

@Entity()
export class Option {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @Column({ default: 0 })
  votes: number;

  @ManyToOne(() => Poll, (poll) => poll.options)
  poll: Poll;
}
