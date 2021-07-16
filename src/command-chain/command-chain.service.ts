import { Injectable } from '@nestjs/common';
import { CommandService } from 'src/command/command.service';
import { PositionTrackerService } from 'src/positions-tracker/position-tracker.service';

@Injectable()
export class CommandChainService {
  private positionTracker: PositionTrackerService;

  constructor() {
    this.positionTracker = new PositionTrackerService();
  }

  execute(commandChain: string): any {
    let isValid: boolean = this.isValid(commandChain);
    let previousPosition: string = this.positionTracker.previousPosition();
    let currentPosition = isValid ? this.positionTracker.currentPosition(commandChain) : this.positionTracker.previousPosition();

    return {
      valid: isValid,
      previousPosition: previousPosition,
      currentPosition: currentPosition
    }
  }

  private isValid(commandChain: string): boolean {
    let validations: boolean[] = commandChain.split('').map(command => {
      let commandService: CommandService = new CommandService();
      return commandService.isValid(command);
    });

    return validations.every(v => v == true);
  }
}
