import { Expose } from 'class-transformer';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @Expose()
    id: string;

    @Expose()
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(7)' })
    createAt: Date;

    @Expose()
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(7)', onUpdate: 'CURRENT_TIMESTAMP(7)' })
    updateAt: Date;
}
