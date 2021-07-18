import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';


@Entity('command_log')
export class CommandLog extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  command: string;

  @Column()
  valid: boolean;
  
  @Column()
  initialPositionX: number;
  
  @Column()
  initialPositionY: number;
  
  @Column({ type: 'varchar', length: 1 })
  initialDirection: string;
  
  @Column()
  finalPositionX: number;
  
  @Column()
  finalPositionY: number;
  
  @Column({ type: 'varchar', length: 1 })
  finalDirection: string;
}