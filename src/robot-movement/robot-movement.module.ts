import { RobotMovementService } from './robot-movement.service';
import { Module } from '@nestjs/common';
import { CommandChainModule } from 'src/command-chain/command-chain.module';

@Module({
	imports: [
		CommandChainModule
	],
	controllers: [],
	providers: [
		RobotMovementService
	],
})
export class RobotMovementModule { }
