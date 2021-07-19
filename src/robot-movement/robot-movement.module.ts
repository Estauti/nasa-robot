import { RobotMovementController } from './robot-movement.controller';
import { RobotMovementService } from './robot-movement.service';
import { Module } from '@nestjs/common';
import { CommandChainModule } from 'src/robot-movement/command-chain/command-chain.module';
import { PositionTrackerModule } from 'src/robot-movement/positions-tracker/position-tracker.module';
import { PositionTrackerService } from 'src/robot-movement/positions-tracker/position-tracker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandLog } from 'src/db/entities/command_log.entity';
import { CommandChainService } from 'src/robot-movement/command-chain/command-chain.service';
import { RobotDriverModule } from 'src/robot-movement/robot-driver/robot-driver.module';
import { RobotDriverService } from 'src/robot-movement/robot-driver/robot-driver.service';
import RobotMovementRepository from './robot-movement.repository';
import { CommandModule } from './command/command.module';

@Module({
	imports: [
		CommandChainModule,
		CommandModule,
		PositionTrackerModule,
		RobotDriverModule,
		TypeOrmModule.forFeature([CommandLog])
	],
	controllers: [
		RobotMovementController,],
	providers: [
		RobotMovementService,
		PositionTrackerService,
		CommandChainService,
		RobotDriverService,
		RobotMovementRepository
	],
})
export class RobotMovementModule { }
