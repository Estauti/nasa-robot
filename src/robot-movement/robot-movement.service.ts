import { Injectable } from '@nestjs/common';
import { CommandChainService } from 'src/robot-movement/command-chain/command-chain.service';
import { PositionTrackerService } from 'src/robot-movement/positions-tracker/position-tracker.service';

@Injectable()
export class RobotMovementService {
  constructor(
    private positionTracker: PositionTrackerService, 
    private commandChainService: CommandChainService) {
  };

  async call(commandChain: string): Promise<any> {
    let isValid: boolean = this.commandChainService.isValid(commandChain);
    let lastPosition: string = await this.positionTracker.lastPosition();
    let currentPosition: string = lastPosition;

    if (isValid) {
      this.commandChainService.execute(commandChain);
      currentPosition = await this.positionTracker.lastPosition();
    }

    return {
      command: commandChain,
      valid: isValid,
      lastPosition: lastPosition,
      currentPosition: currentPosition
    };
  }
}
