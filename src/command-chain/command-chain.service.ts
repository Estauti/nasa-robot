import { Injectable } from '@nestjs/common';
import { CommandService } from 'src/command/command.service';

@Injectable()
export class CommandChainService {
  isValid(commandChain: string): boolean {
    let validations: boolean[] = commandChain.split('').map(command => {
      let commandService: CommandService = new CommandService();
      return commandService.isValid(command);
    });

    return validations.every(v => v == true);
  }
}
