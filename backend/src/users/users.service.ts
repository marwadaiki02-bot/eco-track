import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  // ⚡ Correction : on accepte directement un DTO
  async create(dto: CreateUserDto) {
    const user = this.usersRepo.create({
      email: dto.email,
      password_hash: dto.password_hash,
    });
    return this.usersRepo.save(user);
  }

  async findByEmail(email: string) {
    return this.usersRepo.findOne({ where: { email } });
  }

  async findAll() {
    return this.usersRepo.find();
  }
}
