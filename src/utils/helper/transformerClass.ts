import { plainToClass } from 'class-transformer';
export function transformClass<T>(dto: new (...args: any[]) => T, object: T): T {
    console.log(dto);
    return plainToClass(dto, object, { excludeExtraneousValues: true });
}
