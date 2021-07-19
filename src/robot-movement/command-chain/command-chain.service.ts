import { Injectable } from '@nestjs/common';
import { CommandService } from 'src/robot-movement/command/command.service';
import { RobotDriverService } from 'src/robot-movement/robot-driver/robot-driver.service';
import { Position } from 'src/shared/classes/position';


@Injectable()
export class CommandChainService {
  constructor(private robotDriver: RobotDriverService) {

  }
  execute(position: Position, commandChain: string): void {
    let lastPosition: Position = position;

    this.split(commandChain).forEach(command => {
      this.robotDriver.execute(command);
    });

    
  }

  isValid(commandChain: string): boolean {
    let validations: boolean[] = this.split(commandChain).map(command => {
      let commandService: CommandService = new CommandService();
      return commandService.isValid(command);
    });

    return validations.every(v => v == true);
  }

  split(commandChain: string): string[] {
    return commandChain.split('');
  }
}
