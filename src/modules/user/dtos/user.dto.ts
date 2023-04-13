import { IsNotEmpty, IsInt } from 'class-validator';

export enum UserRole {
    ADMIN = 'admin',
    GHOST = 'ghost',
}

export class UserCreate {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsInt()
    age: number;
}

export class UserLogin {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}
