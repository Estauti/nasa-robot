import { PositionTrackerService } from './position-tracker.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandLog } from 'src/db/entities/command_log.entity';
import RobotMovementRepository from '../robot-movement.repository';

@Module({
    imports: [TypeOrmModule.forFeature([CommandLog])],
    controllers: [],
    providers: [
        PositionTrackerService,
        RobotMovementRepository
    ],
})
export class PositionTrackerModule { }
