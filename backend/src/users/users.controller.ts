import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserResponseDto } from './user-response.dto';
import { CreateUserDto } from './create-user.dto';


@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: 201, type: UserResponseDto, description: 'Utilisateur créé avec succès' })
  async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  @ApiResponse({ status: 200, type: [UserResponseDto], description: 'Liste des utilisateurs' })
  async findAll() {
    return this.usersService.findAll();
  }
}
