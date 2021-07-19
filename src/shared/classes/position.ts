import { CommandLog } from "src/db/entities/command_log.entity";
import { Settings } from "../constants/settings";
import { PositionHelper } from "../helpers/position-helper";

export class Position {
  x: number;
  y: number;
  direction: string;

  private positionHelper: PositionHelper;

  constructor({ x, y, direction }: PositionInterface) {
    this.x = x;
    this.y = y;
    this.direction = direction;

    this.positionHelper = new PositionHelper()
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
  formatted() {
    return this.positionHelper.format(
      this.x,
      this.y,
      this.direction
    );
  }
}

interface PositionInterface {
  x: number;
  y: number;
  direction: string;
}