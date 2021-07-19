import { PositionTrackerService } from './position-tracker.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandLog } from 'src/db/entities/command_log.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CommandLog])],
    controllers: [],
    providers: [
        PositionTrackerService,],
})
export class PositionTrackerModule { }
