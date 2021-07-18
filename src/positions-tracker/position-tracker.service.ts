import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandLog } from 'src/db/entities/command_log.entity';
import { Position } from 'src/shared/classes/position';
import { PositionHelper } from 'src/shared/helpers/position-helper';
import { Repository } from 'typeorm';

@Injectable()
export class PositionTrackerService {
  private positionHelper: PositionHelper;

  // @InjectRepository(CommandLog)
  // private readonly commandLogRepository: Repository<CommandLog>

  constructor(
    @InjectRepository(CommandLog)
    private readonly commandLogRepository: Repository<CommandLog>
  ) {
    this.positionHelper = new PositionHelper()
  }

  async lastPosition(): Promise<string> {
    let lastCommandLog = await this.commandLogRepository.findOne({order: {id: 'DESC'}});
    let lastPosition: Position = !lastCommandLog
                        ? Position.initialPosition()
                        : Position.fromCommandLog(lastCommandLog);

    return this.positionHelper.format(
      lastPosition.x,
      lastPosition.y,
      lastPosition.direction
    );
  }
}
