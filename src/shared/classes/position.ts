import { CommandLog } from "src/db/entities/command_log.entity";
import { Settings } from "../constants/settings";

export class Position {
  x: number;
  y: number;
  direction: string;

  constructor({ x, y, direction }: PositionInterface) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  static fromCommandLog(commandLog: CommandLog): Position {
    return new Position({
      x: commandLog.finalPositionX,
      y: commandLog.finalPositionY,
      direction: commandLog.finalDirection
    });
  }

  static initialPosition(): Position {
    return new Position({
      x: Settings.INITIAL_X,
      y: Settings.INITIAL_Y,
      direction: Settings.INITIAL_DIRECTION
    });
  }
}

interface PositionInterface {
  x: number;
  y: number;
  direction: string;
}