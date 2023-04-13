import { Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Body, UsePipes } from '@nestjs/common/decorators';
import { UserCreate, UserLogin } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { AuthService } from '../services/auth.service';
import { UserInfo } from '../dtos/token.dto';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

    @UsePipes(new ValidationPipe())
    @Post()
    createUser(@Body() user: UserCreate): Promise<User> {
        return this.userService.createUser(user);
    }

    @UsePipes(new ValidationPipe())
    @Post('signup')
    registerUser(@Body() user: UserCreate): Promise<UserInfo> {
        return this.authService.registerUser(user);
    }

    @UsePipes(new ValidationPipe())
    @Post('singing')
    loginUser(@Body() user: UserLogin): Promise<UserInfo> {
        return this.authService.login(user);
    }
}


