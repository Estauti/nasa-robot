import { RobotMovementModule } from './robot-movement/robot-movement.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTypeOrmProdConfig } from 'app.dbconfig';

@Module({
  imports: [
    RobotMovementModule,
    TypeOrmModule.forRoot(createTypeOrmProdConfig())
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule { }
