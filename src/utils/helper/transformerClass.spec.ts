import { UserCreate } from '../../modules/user/dtos/user.dto';
import { transformClass } from './transformerClass';

describe('AuthController', () => {
    describe('transform class ', () => {
        it('should return true', () => {
            let transform = {};
            const userCreate = {
                email: 'nnluan@gmail.com',
                password: 'sdfasfd',
                username: 'nguyen vv luan',
                age: 21,
                avatar: 'nvvvssds',
            };
            transform = transformClass(UserCreate, userCreate);
            expect(transform.hasOwnProperty('avatar')).toEqual(false);
        });
    });
});
