// Event Model - represent event entity
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class EventEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
