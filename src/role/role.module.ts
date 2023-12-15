import { Module } from '@nestjs/common';
import { RoleControllers } from './role.controller';

@Module({
  controllers: [RoleControllers],
})
export class RoleModule {}
