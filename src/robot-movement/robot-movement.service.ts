import { Injectable } from '@nestjs/common';
import { CommandChainService } from 'src/command-chain/command-chain.service';
import { PositionTrackerService } from 'src/positions-tracker/position-tracker.service';

@Injectable()
export class RobotMovementService {
  private commandChainService: CommandChainService
  private positionTracker: PositionTrackerService;

  constructor() {
    this.commandChainService = new CommandChainService();
    this.positionTracker = new PositionTrackerService();
  };

  call(commandChain: string): any {
    let isValid: boolean = this.commandChainService.isValid(commandChain);
    let lastPosition: string = this.positionTracker.lastPosition();
    let currentPosition = lastPosition;

    if (isValid) {
      this.commandChainService.execute(commandChain);
      currentPosition = this.positionTracker.lastPosition();
    }

    return {
      command: commandChain,
      valid: isValid,
      lastPosition: lastPosition,
      currentPosition: currentPosition
    };
  }
}
