import { Expose } from 'class-transformer';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
const { TIME } = process.env;
export abstract class BaseEntity {
    @Expose()
    id: string;

    @Expose()
    @CreateDateColumn({ type: 'timestamp', default: () => `CURRENT_TIMESTAMP(${TIME})` })
    createAt: Date;

    @Expose()
    @UpdateDateColumn({
        type: 'timestamp',
        default: () => `CURRENT_TIMESTAMP(${TIME})`,
        onUpdate: `CURRENT_TIMESTAMP(${TIME})`,
    })
    updateAt: Date;
}
