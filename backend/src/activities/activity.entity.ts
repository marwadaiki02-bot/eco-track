import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @Column()
  type: string; // car, meat, electricity

  @Column('numeric')
  value: number;

  @Column('numeric')
  co2: number;

  // ⚡ Correction pour SQLite
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
