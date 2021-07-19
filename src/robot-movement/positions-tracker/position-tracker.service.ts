import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandLog } from 'src/db/entities/command_log.entity';
import { Position } from 'src/shared/classes/position';
import { PositionHelper } from 'src/shared/helpers/position-helper';
import { Repository } from 'typeorm';
import RobotMovementRepository from '../robot-movement.repository';
import { RobotMovementService } from '../robot-movement.service';

@Injectable()
export class PositionTrackerService {
  

  constructor(
    private robotMovementRepository: RobotMovementRepository
  ) {}

  async lastPosition(): Promise<Position> {
    let lastCommandLog = await this.robotMovementRepository.findLast();
    return !lastCommandLog
            ? Position.initialPosition()
            : Position.fromCommandLog(lastCommandLog);
  }
}
