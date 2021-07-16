import { Injectable } from '@nestjs/common';
import { CommandChainService } from 'src/command-chain/command-chain.service';
import { PositionTrackerService } from 'src/positions-tracker/position-tracker.service';

@Injectable()
export class RobotMovementService {
  private commandChainService: CommandChainService
  private positionTracker: PositionTrackerService

  constructor() {
    this.commandChainService = new CommandChainService();
    this.positionTracker = new PositionTrackerService();
  };

  move(commandChain: string): any {
    let isValid: boolean = this.validate(commandChain);
    let previousPosition: string = this.positionTracker.previousPosition();
    let currentPosition = isValid ? this.positionTracker.currentPosition() : this.positionTracker.previousPosition();
    return {
      command: commandChain,
      valid: isValid,
      previousPosition: previousPosition,
      currentPosition: currentPosition
    };
  }

  validate(commandChain: string): boolean {
    return this.commandChainService.isValid(commandChain);
  }
}
