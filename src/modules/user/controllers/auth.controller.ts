import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { UserInfo } from '../dtos/token.dto';
import { UserCreate, UserLogin } from '../dtos/user.dto';
import { AuthService } from '../services/auth.service';
import { transformClass } from '../../../utils/helper/transformerClass';
@Controller('user')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    registerUser(@Body() user: UserCreate): Promise<UserInfo> {
        const userTransform = transformClass(UserCreate, user);

        return this.authService.registerUser(userTransform);
    }

    @Post('singing')
    loginUser(@Body() user: UserLogin): Promise<UserInfo> {
        const userTransform = transformClass(UserLogin, user);

        return this.authService.login(userTransform);
    }
}
