import { CreateEventDto, UpdateEventDto } from './dto/create-event-dto';
import { EventsService } from './events.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { GetEventsQueryDto } from './dto/get-events-query-dto';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) {}

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createEventDto: CreateEventDto) {
        return this.eventsService.createEvent(createEventDto);
    }

    @Get()
    getAll(@Query() query: GetEventsQueryDto) {
        return this.eventsService.getAllEvents();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.eventsService.getEventById(id);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    update(@Param('id') id: number, @Body() updateEventDto: UpdateEventDto) {
        return this.eventsService.updateEvent(updateEventDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return 'delete event';
    }
}
