import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ActivitiesModule } from './activities/activities.module';
import { User } from './users/user.entity';
import { Activity } from './activities/activity.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'eco-track.sqlite', // fichier créé automatiquement
      entities: [User, Activity],
      synchronize: true, // ⚠️ seulement en dev
    }),
    UsersModule,
    AuthModule,
    ActivitiesModule,
  ],
})
export class AppModule {}
