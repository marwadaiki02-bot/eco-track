import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', description: 'Token JWT à utiliser pour les requêtes protégées' })
  access_token: string;

  @ApiProperty({ example: 'user@example.com', description: 'Email de l’utilisateur authentifié' })
  email: string;

  @ApiProperty({ example: 1, description: 'Identifiant unique de l’utilisateur' })
  userId: number;
}
