import { Injectable } from '@nestjs/common';
import { CommandLog } from 'src/db/entities/command_log.entity';
import { CommandChainService } from 'src/robot-movement/command-chain/command-chain.service';
import { PositionTrackerService } from 'src/robot-movement/positions-tracker/position-tracker.service';
import { Position } from 'src/shared/classes/position';
import RobotMovementRepository from './robot-movement.repository';


@Injectable()
export class RobotMovementService {
  constructor(
    private positionTracker: PositionTrackerService, 
    private commandChainService: CommandChainService,
    private robotMovementRepository: RobotMovementRepository
  ) {
  };

  async call(commandChain: string): Promise<any> {
    let isValid: boolean = this.commandChainService.isValid(commandChain);
    let lastPosition: Position = await this.positionTracker.lastPosition();
    let currentPosition: Position = lastPosition;
    let data: any = {
      command: commandChain,
      valid: isValid,
      lastPosition: lastPosition.formatted(),
    }

    if (isValid) {
      currentPosition = this.commandChainService.execute(lastPosition, commandChain);
    }
    else {
      this.saveInvalidCommand(currentPosition, commandChain);
    }

    return {
      ...data,
      currentPosition: currentPosition.formatted()
    };
  }
  saveInvalidCommand(position: Position, commandChain: string) {
    this.robotMovementRepository.create({
      requestType: 'GET', 
      command: commandChain, 
      valid: false,
      initialPositionX: position.x,
      initialPositionY: position.y,
      initialDirection: position.direction,
      finalPositionX: position.x,
      finalPositionY: position.y,
      finalDirection: position.direction,
    })
  }
}
