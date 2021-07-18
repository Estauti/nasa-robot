// base.entity.ts
import { PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({type: 'varchar', length: 10})
  requestType: string;
}