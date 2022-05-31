import { TaskStatus } from './tasksStatus.enum';

import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/auth/user.entity';

@Entity()
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: TaskStatus;
  @ManyToOne((type) => User, (user) => user.tasks, { eager: false })
  user: User;
  @Column()
  userId: number;
}
