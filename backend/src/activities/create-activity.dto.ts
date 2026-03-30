import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsInt, Min } from 'class-validator';

export class CreateActivityDto {
  @ApiProperty({ example: 'car', description: 'Type d’activité (car, meat, electricity)' })
  @IsString()
  type: string;

  @ApiProperty({ example: 100, description: 'Valeur de l’activité (km, kg, kWh)' })
  @IsNumber()
  @Min(1)
  value: number;

  @ApiProperty({ example: 1, description: 'ID de l’utilisateur associé' })
  @IsInt()
  userId: number;
}
