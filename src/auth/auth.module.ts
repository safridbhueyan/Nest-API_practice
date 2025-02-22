import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthSercices } from './auth.services';

@Module({

    controllers:[AuthController],
    providers:[AuthSercices],
})
export class AuthModule {}
