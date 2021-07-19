import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RobotMovementService } from './robot-movement.service';

@Controller('command')
export class RobotMovementController {
  constructor(private readonly robotMovementService: RobotMovementService) {

  }
  @Post()
  async runCommand(@Body('command') command: string): Promise<string> {
    return this.robotMovementService.call(command);
  }
}
