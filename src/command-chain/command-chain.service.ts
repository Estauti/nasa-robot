import { Injectable } from '@nestjs/common';
import { CommandService } from 'src/command/command.service';
import { RobotDriverService } from 'src/robot-driver/robot-driver.service';


@Injectable()
export class CommandChainService {
  constructor(private robotDriver: RobotDriverService) {

  }
  execute(commandChain: string): void {
    // let robotDriver: RobotDriverService = new RobotDriverService();

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
