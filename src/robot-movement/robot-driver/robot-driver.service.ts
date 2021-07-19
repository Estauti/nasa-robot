import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandLog } from 'src/db/entities/command_log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RobotDriverService {
  constructor(
    @InjectRepository(CommandLog)
    private readonly commandLogRepository: Repository<CommandLog>
  ) {}

  execute(command: string): void {

  }
}
