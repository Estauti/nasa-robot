import { CommandChainService } from './command-chain.service';
import { Module } from '@nestjs/common';
import { CommandModule } from 'src/command/command.module';

@Module({
    imports: [CommandModule],
    controllers: [],
    providers: [
        CommandChainService,
    ],
})
export class CommandChainModule { }
