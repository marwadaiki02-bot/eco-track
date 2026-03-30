import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './activity.entity';
import { User } from '../users/user.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activitiesRepo: Repository<Activity>,
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  private calculateCO2(type: string, value: number): number {
    switch (type) {
      case 'car': return value * 0.2;
      case 'meat': return value * 5;
      case 'electricity': return value * 0.5;
      default: return 0;
    }
  }

  async create(userId: number, type: string, value: number) {
    const user = await this.usersRepo.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error(`Utilisateur avec id ${userId} introuvable`);
    }

    const co2 = this.calculateCO2(type, value);
    const activity = this.activitiesRepo.create({ user, type, value, co2 });
    return this.activitiesRepo.save(activity);
  }

  async findAll() {
    return this.activitiesRepo.find({ relations: ['user'] });
  }
}
