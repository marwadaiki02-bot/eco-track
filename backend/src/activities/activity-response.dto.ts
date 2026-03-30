import { ApiProperty } from '@nestjs/swagger';

export class ActivityResponseDto {
  @ApiProperty({ example: 1, description: 'Identifiant unique de l’activité' })
  id: number;

  @ApiProperty({ example: 'car', description: 'Type d’activité (car, meat, electricity)' })
  type: string;

  @ApiProperty({ example: 100, description: 'Valeur de l’activité (km, kg, kWh)' })
  value: number;

  @ApiProperty({ example: 20, description: 'Émissions de CO₂ calculées en kg' })
  co2: number;

  @ApiProperty({ example: '2026-03-30T21:40:07.000Z', description: 'Date de création de l’activité' })
  date: Date;

  @ApiProperty({ example: 1, description: 'Identifiant de l’utilisateur associé' })
  userId: number;
}
