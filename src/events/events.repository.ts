import { EntityRepository, Repository } from 'typeorm';
import { EventEntity } from './event.entity';
import { CreateEventDto } from './dto/create-event-dto';

// responsible for communication with database
@EntityRepository(EventEntity)
export class EventsRepository extends Repository<EventEntity> {
    async createEvent(createEventDto: CreateEventDto): Promise<EventEntity> {
        const { name, description } = createEventDto;
        const newEvent = new EventEntity();
        newEvent.name = name;
        newEvent.description = description;
        return await this.save(newEvent);
    }

    async getAllEvents(): Promise<EventEntity[]> {
        return this.find();
    }
}
