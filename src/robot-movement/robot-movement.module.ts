import { RobotMovementService } from './robot-movement.service';
import { Module } from '@nestjs/common';
import { CommandChainModule } from 'src/command-chain/command-chain.module';
import { PositionTrackerModule } from 'src/positions-tracker/position-tracker.module';
import { PositionTrackerService } from 'src/positions-tracker/position-tracker.service';

@Module({
	imports: [
		CommandChainModule,
		PositionTrackerModule
	],
	controllers: [],
	providers: [
		RobotMovementService,
		PositionTrackerService
	],
})
export class RobotMovementModule { }
