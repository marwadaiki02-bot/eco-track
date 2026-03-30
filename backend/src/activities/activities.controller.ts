import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ActivitiesService } from './activities.service';
import { ActivityResponseDto } from './activity-response.dto';
import { CreateActivityDto } from './create-activity.dto';


@ApiTags('activities')
@Controller('activities')
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @Post()
  @ApiResponse({ status: 201, type: ActivityResponseDto, description: 'Activité créée avec calcul CO₂' })
  async create(@Body() dto: CreateActivityDto) {
    return this.activitiesService.create(dto.userId, dto.type, dto.value);
  }

  @Get()
  @ApiResponse({ status: 200, type: [ActivityResponseDto], description: 'Liste des activités avec CO₂ calculé' })
  async findAll() {
    return this.activitiesService.findAll();
  }
}
