import { CommandService } from './command.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [
        CommandService,
    ],
    exports: [CommandService]
})
export class CommandModule { }
