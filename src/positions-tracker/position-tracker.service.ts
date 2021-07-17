import { Injectable } from '@nestjs/common';
import { Settings } from 'src/shared/constants/settings';
import { PositionHelper } from 'src/shared/helpers/position-helper';

@Injectable()
export class PositionTrackerService {
  private positionHelper: PositionHelper;

  constructor() {
    this.positionHelper = new PositionHelper()
  }

  lastPosition(): string {
    return this.positionHelper.format(
      Settings.INITIAL_X,
      Settings.INITIAL_Y,
      Settings.INITIAL_DIRECTION
    );
  }
}
