import { Injectable } from '@nestjs/common';
import { CommandService } from 'src/robot-movement/command/command.service';
import { RobotDriverService } from 'src/robot-movement/robot-driver/robot-driver.service';
import { Position } from 'src/shared/classes/position';
import RobotMovementRepository from '../robot-movement.repository';


@Injectable()
export class CommandChainService {
  constructor(
    private robotDriver: RobotDriverService,
    private robotMovementRepository: RobotMovementRepository
  ) {

  }
  execute(position: Position, commandChain: string): Position {
    let data = {
      requestType: 'POST', 
      command: commandChain, 
      valid: true,
      initialPositionX: position.x,
      initialPositionY: position.y,
      initialDirection: position.direction
    }

    this.split(commandChain).forEach(command => {
      position = this.robotDriver.execute(position, command);
    });

    this.robotMovementRepository.create({
      ...data,
      finalPositionX: position.x,
      finalPositionY: position.y,
      finalDirection: position.direction,
    });
    return position;
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
