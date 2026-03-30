import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: 1, description: 'Identifiant unique de l’utilisateur' })
  id: number;

  @ApiProperty({ example: 'user@example.com', description: 'Adresse email de l’utilisateur' })
  email: string;

  @ApiProperty({ example: '2026-03-30T21:40:07.000Z', description: 'Date de création du compte' })
  createdAt: Date;

  @ApiProperty({ example: '2026-03-30T21:40:07.000Z', description: 'Date de dernière mise à jour du compte' })
  updatedAt: Date;
}
