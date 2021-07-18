import { RobotMovementService } from './robot-movement.service';
import { Module } from '@nestjs/common';
import { CommandChainModule } from 'src/command-chain/command-chain.module';
import { PositionTrackerModule } from 'src/positions-tracker/position-tracker.module';
import { PositionTrackerService } from 'src/positions-tracker/position-tracker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandLog } from 'src/db/entities/command_log.entity';
import { CommandChainService } from 'src/command-chain/command-chain.service';
import { RobotDriverModule } from 'src/robot-driver/robot-driver.module';
import { RobotDriverService } from 'src/robot-driver/robot-driver.service';

@Module({
	imports: [
		CommandChainModule,
		PositionTrackerModule,
		RobotDriverModule,
		TypeOrmModule.forFeature([CommandLog])
	],
	controllers: [],
	providers: [
		RobotMovementService,
		PositionTrackerService,
		CommandChainService,
		RobotDriverService
	],
})
export class RobotMovementModule { }
