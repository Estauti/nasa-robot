import { CommandLog } from "src/db/entities/command_log.entity";
import { Direction } from "../constants/direction.enum";
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
  moveNorth() {
    if(this.y < Settings.FIELD_HEIGHT - 1) this.y += 1;
  }
  moveSouth() {
    if(this.y > Settings.INITIAL_Y) this.y -= 1;
  }
  moveEast() {
    if(this.x < Settings.FIELD_WIDTH - 1) this.x += 1;
  }
  moveWest() {
    if(this.x > Settings.INITIAL_X) this.x -= 1;
  }
  rotateClockwise() {
    let clockwiseRotations: any = {}
    clockwiseRotations[Direction.NORTH] = Direction.EAST;
    clockwiseRotations[Direction.EAST] = Direction.SOUTH;
    clockwiseRotations[Direction.SOUTH] = Direction.WEST;
    clockwiseRotations[Direction.WEST] = Direction.NORTH;

    this.direction = clockwiseRotations[this.direction];
  }
  rotateCounterclockwise() {
    let counterclockwiseRotations: any = {}
    counterclockwiseRotations[Direction.NORTH] = Direction.WEST;
    counterclockwiseRotations[Direction.WEST] = Direction.SOUTH;
    counterclockwiseRotations[Direction.SOUTH] = Direction.EAST;
    counterclockwiseRotations[Direction.EAST] = Direction.NORTH;

    this.direction = counterclockwiseRotations[this.direction];
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