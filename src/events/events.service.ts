import { EventEntity } from './event.entity';
import { CreateEventDto, UpdateEventDto } from './dto/create-event-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventsRepository } from './events.repository';

// My business logic for managing events
export class EventsService {
    constructor(
        @InjectRepository(EventsRepository)
        private eventsRepository: EventsRepository,
    ) {}

    async getAllEvents(): Promise<EventEntity[]> {
        return this.eventsRepository.getAllEvents();
    }

    async getEventById(id: number): Promise<EventEntity> {
        return null;
    }

    async createEvent(createEventDto: CreateEventDto): Promise<EventEntity> {
        return this.eventsRepository.createEvent(createEventDto);
    }

    async updateEvent(updateEventDto: UpdateEventDto) {
        return 'event updated';
    }
}
