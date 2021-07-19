import { RobotDriverService } from './robot-driver.service';
import { Module } from '@nestjs/common';
import { CommandModule } from '../command/command.module';

@Module({
    imports: [
        CommandModule
    ],
    controllers: [],
    providers: [
        RobotDriverService
    ],
})
export class RobotDriverModule { }
