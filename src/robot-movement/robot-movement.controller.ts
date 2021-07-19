import { Controller, Get, Param } from '@nestjs/common';
import { RobotMovementService } from './robot-movement.service';

@Controller()
export class RobotMovementController {
  constructor(private readonly robotMovementService: RobotMovementService) {

  }
  @Get(':command')
  async getHello(@Param('command') command: string): Promise<string> {
    return this.robotMovementService.call(command);
    
  }
}
