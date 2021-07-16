import { Injectable } from '@nestjs/common';

@Injectable()
export class CommandService {
  isValid(command: string): boolean {
    return this.isMovement(command) || this.isRotation(command);
  }

  isMovement(command: string): boolean {
    return command == 'M';
  }

  isRotation(command: string): boolean {
    return ['L', 'R'].includes(command);
  }
}
