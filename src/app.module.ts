import { RobotMovementModule } from './robot-movement/robot-movement.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RobotMovementService } from './robot-movement/robot-movement.service';
import { CommandLog } from './db/entities/command_log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTypeOrmProdConfig } from 'app.dbconfig';
import { PositionTrackerModule } from './robot-movement/positions-tracker/position-tracker.module';
import { PositionTrackerService } from './robot-movement/positions-tracker/position-tracker.service';
import { join } from "path";
import { CommandChainService } from './robot-movement/command-chain/command-chain.service';
import { RobotDriverService } from './robot-movement/robot-driver/robot-driver.service';

@Module({
  imports: [
    RobotMovementModule,
    PositionTrackerModule,
    TypeOrmModule.forRoot(createTypeOrmProdConfig()),
    TypeOrmModule.forFeature([CommandLog])
  ],
  controllers: [AppController],
  providers: [
    RobotMovementService,
    PositionTrackerService,
    CommandChainService,
    RobotDriverService
  ],
})
export class AppModule { }
