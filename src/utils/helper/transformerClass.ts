import { ClassConstructor, plainToClass } from 'class-transformer';
export function transformClass<T, V>(dto: ClassConstructor<T>, object: V): T {
    return plainToClass(dto, object, { excludeExtraneousValues: true });
}
