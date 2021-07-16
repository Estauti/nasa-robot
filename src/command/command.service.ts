import { Injectable } from '@nestjs/common';
import { MovementCommand } from 'src/shared/constants/movement-command.enum';
import { RotationCommand } from 'src/shared/constants/rotation-command.enum';

@Injectable()
export class CommandService {
  isValid(command: string): boolean {
    return this.isMovement(command) || this.isRotation(command);
  }

  isMovement(command: string): boolean {
    return command == MovementCommand.FORWARD;
  }

  isRotation(command: string): boolean {
    let rotations: Array<string> = [RotationCommand.LEFT, RotationCommand.RIGHT];
    return rotations.includes(command);
  }
}
