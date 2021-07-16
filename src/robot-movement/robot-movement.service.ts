import { Injectable } from '@nestjs/common';

@Injectable()
export class RobotMovementService {
  move(command: string): string {
    return command;
  }
}
