import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateEventDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;
}

export class UpdateEventDto {

    @IsOptional()
    name: string;

    @IsOptional()
    description: string;
}
