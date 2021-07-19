import { Injectable } from '@nestjs/common';
import { Position } from 'src/shared/classes/position';
import { Direction } from 'src/shared/constants/direction.enum';
import { RotationCommand } from 'src/shared/constants/rotation-command.enum';
import { CommandService } from '../command/command.service';

@Injectable()
export class RobotDriverService {
  position: Position;

  constructor(private commandService: CommandService) {}

  execute(position: Position, command: string): Position {
    this.position = position;

    if(this.commandService.isMovement(command)) {
      this.moveRobot();      
    }
    else {
      this.rotateRobot(command);
    }

    return this.position;
  }
  moveRobot() {
    switch (this.position.direction) {
      case Direction.NORTH:
        this.position.moveNorth();
        break;
    
      case Direction.SOUTH:
        this.position.moveSouth();
        break;
    
      case Direction.EAST:
        this.position.moveEast();
        break;
    
      case Direction.WEST:
        this.position.moveWest();
        break;
    }
  }
  rotateRobot(command: string) {
    if(command == RotationCommand.RIGHT) {
      this.position.rotateClockwise();
    }
    else {
      this.position.rotateCounterclockwise();
    }
  }
}
