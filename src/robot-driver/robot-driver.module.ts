import { RobotDriverService } from './robot-driver.service';
import { Module } from '@nestjs/common';
import { CommandLog } from 'src/db/entities/command_log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CommandLog])],
    controllers: [],
    providers: [
        RobotDriverService,
    ],
})
export class RobotDriverModule { }
