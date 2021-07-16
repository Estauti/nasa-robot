import { RobotMovementModule } from './robot-movement/robot-movement.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RobotMovementService } from './robot-movement/robot-movement.service';

@Module({
  imports: [
    RobotMovementModule
  ],
  controllers: [AppController],
  providers: [
    RobotMovementService
  ],
})
export class AppModule { }
