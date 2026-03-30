import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ActivitiesService } from './activities.service';
import { ActivityResponseDto } from './activity-response.dto';
import { CreateActivityDto } from './create-activity.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('activities')
@Controller('activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiResponse({ status: 201, type: ActivityResponseDto, description: 'Activité créée avec calcul CO₂' })
  async create(@Body() dto: CreateActivityDto) {
    return this.activitiesService.create(dto.userId, dto.type, dto.value);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({ status: 200, type: [ActivityResponseDto], description: 'Liste des activités avec CO₂ calculé' })
  async findAll() {
    return this.activitiesService.findAll();
  }
}
