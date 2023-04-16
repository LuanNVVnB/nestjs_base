import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export enum UserRole {
    ADMIN = 'admin',
    GHOST = 'ghost',
}

export class UserCreate {
    @IsNotEmpty()
    @Expose()
    username: string;

    @IsNotEmpty()
    @Expose()
    password: string;

    @IsNotEmpty()
    @Expose()
    email: string;

    @IsNotEmpty()
    @IsInt()
    @Expose()
    age: number;
}

export class UserLogin {
    @IsNotEmpty()
    @Expose()
    username: string;

    @IsNotEmpty()
    @Expose()
    password: string;
}
