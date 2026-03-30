import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthResponseDto } from './auth-response.dto';
import { RegisterDto } from './register.dto';
import { LoginDto } from './login.dto';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiResponse({ status: 201, type: AuthResponseDto, description: 'Utilisateur créé et token JWT retourné' })
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto.email, dto.password);
  }

  @Post('login')
  @ApiResponse({ status: 200, type: AuthResponseDto, description: 'Connexion réussie, token JWT retourné' })
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }
}
