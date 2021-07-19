import { CommandChainService } from './command-chain.service';
import { Module } from '@nestjs/common';
import { CommandModule } from 'src/robot-movement/command/command.module';
import { PositionTrackerModule } from 'src/robot-movement/positions-tracker/position-tracker.module';
import { PositionTrackerService } from 'src/robot-movement/positions-tracker/position-tracker.service';
import { RobotDriverModule } from 'src/robot-movement/robot-driver/robot-driver.module';
import { RobotDriverService } from 'src/robot-movement/robot-driver/robot-driver.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandLog } from 'src/db/entities/command_log.entity';
import RobotMovementRepository from '../robot-movement.repository';

@Module({
    imports: [
        CommandModule,
        PositionTrackerModule,
        RobotDriverModule
    ],
    controllers: [],
    providers: [
        CommandChainService,
        RobotDriverService,
        // RobotMovementRepository
    ],
})
export class CommandChainModule { }
