import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Option } from './option.entity';

@Entity()
export class Poll {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  question: string;

  @OneToMany(() => Option, (option) => option.poll, { cascade: true })
  options: Option[];
}
