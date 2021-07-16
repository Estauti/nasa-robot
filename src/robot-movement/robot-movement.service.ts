import { Injectable } from '@nestjs/common';
import { CommandChainService } from 'src/command-chain/command-chain.service';

@Injectable()
export class RobotMovementService {
  private commandChainService: CommandChainService
  

  constructor() {
    this.commandChainService = new CommandChainService();
  };

  call(commandChain: string): any {
    let result = this.commandChainService.execute(commandChain);

    return {
      command: commandChain,
      valid: result.valid,
      previousPosition: result.previousPosition,
      currentPosition: result.currentPosition
    };
  }
}
