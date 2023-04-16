import { ClassSerializerInterceptor, Controller, Post } from '@nestjs/common';
import { Body, Get, UseInterceptors } from '@nestjs/common/decorators';
import { plainToClass } from 'class-transformer';
import { UserCreate } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() user: UserCreate): Promise<User> {
        const userTransform = plainToClass(UserCreate, user, { excludeExtraneousValues: true });
        return this.userService.createUser(userTransform);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    getUser(): Promise<User[]> {
        return this.userService.getUser();
    }
}
