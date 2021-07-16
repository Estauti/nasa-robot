import { Injectable } from '@nestjs/common';

@Injectable()
export class PositionTrackerService {
  previousPosition(): string {
    return "(0,0,N)";
  }

  currentPosition(): string {
    return "";
  }
}
