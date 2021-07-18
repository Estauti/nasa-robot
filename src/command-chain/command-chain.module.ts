import { CommandChainService } from './command-chain.service';
import { Module } from '@nestjs/common';
import { CommandModule } from 'src/command/command.module';
import { PositionTrackerModule } from 'src/positions-tracker/position-tracker.module';
import { PositionTrackerService } from 'src/positions-tracker/position-tracker.service';
import { RobotDriverModule } from 'src/robot-driver/robot-driver.module';
import { RobotDriverService } from 'src/robot-driver/robot-driver.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandLog } from 'src/db/entities/command_log.entity';

@Module({
    imports: [
        CommandModule,
        PositionTrackerModule,
        RobotDriverModule,
        TypeOrmModule.forFeature([CommandLog])
    ],
    controllers: [],
    providers: [
        CommandChainService,
        RobotDriverService
    ],
})
export class CommandChainModule { }
