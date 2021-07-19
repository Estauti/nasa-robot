import { Position } from "src/shared/classes/position";

export default class CreateRobotMovementDto {
  readonly requestType: string;
  readonly command: string;
  readonly valid: boolean;
  readonly initialPositionX: number;
  readonly initialPositionY: number;
  readonly initialDirection: string;
  readonly finalPositionX: number;
  readonly finalPositionY: number;
  readonly finalDirection: string;
}