import { CommandChainService } from './command-chain.service';
import { Module } from '@nestjs/common';
import { CommandModule } from 'src/command/command.module';
import { PositionTrackerModule } from 'src/positions-tracker/position-tracker.module';
import { PositionTrackerService } from 'src/positions-tracker/position-tracker.service';
import { RobotDriverModule } from 'src/robot-driver/robot-driver.module';

@Module({
    imports: [
        CommandModule,
        PositionTrackerModule,
        RobotDriverModule
    ],
    controllers: [],
    providers: [
        CommandChainService
    ],
})
export class CommandChainModule { }
