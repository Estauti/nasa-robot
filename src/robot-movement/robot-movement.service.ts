import { Injectable } from '@nestjs/common';
import { CommandLog } from 'src/db/entities/command_log.entity';
import { CommandChainService } from 'src/robot-movement/command-chain/command-chain.service';
import { PositionTrackerService } from 'src/robot-movement/positions-tracker/position-tracker.service';
import { Position } from 'src/shared/classes/position';


@Injectable()
export class RobotMovementService {
  constructor(
    private positionTracker: PositionTrackerService, 
    private commandChainService: CommandChainService,
  ) {
  };

  async call(commandChain: string): Promise<any> {
    let isValid: boolean = this.commandChainService.isValid(commandChain);
    let lastPosition: Position = await this.positionTracker.lastPosition();
    let currentPosition: Position = lastPosition;

    if (isValid) {
      this.commandChainService.execute(lastPosition, commandChain);
      currentPosition = await this.positionTracker.lastPosition();
    }

    return {
      command: commandChain,
      valid: isValid,
      lastPosition: lastPosition.formatted(),
      currentPosition: currentPosition.formatted()
    };
  }
}
