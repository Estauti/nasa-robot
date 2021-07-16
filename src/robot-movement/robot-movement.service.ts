import { Injectable } from '@nestjs/common';
import { CommandChainService } from 'src/command-chain/command-chain.service';

@Injectable()
export class RobotMovementService {
  private commandChainService: CommandChainService

  constructor() {
    this.commandChainService = new CommandChainService();
  };

  move(commandChain: string): string {
    let isValid: boolean = this.validate(commandChain);
    return `${commandChain} is ${isValid ? 'valid' : 'invalid'}`;
  }

  validate(commandChain: string): boolean {
    return this.commandChainService.isValid(commandChain);
  }
}
