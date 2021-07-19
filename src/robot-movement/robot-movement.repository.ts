import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandLog } from 'src/db/entities/command_log.entity';
import CreateRobotMovementDto from './dto/create-robot-movement.dto';

@Injectable()
export default class RobotMovementRepository {
  constructor(
    @InjectRepository(CommandLog)
    private readonly commandLogRepository: Repository<CommandLog>
  ) {}

  async findLast(): Promise<CommandLog> {
    return await this.commandLogRepository.findOne({order: {id: 'DESC'}});
  }
  async create(createRobotMovementDto: CreateRobotMovementDto) {
    await this.commandLogRepository.save(createRobotMovementDto);
  }
}