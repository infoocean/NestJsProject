import { Controller, Get, Headers, Param, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/users')
export class UsersControllers {
  @Get()
  getUsers(@Query() query: any, @Headers() token: string): string {
    console.log(token);
    return 'users';
  }

  @Get('/user/:id')
  getUserbyId() {}

  @Get('/profile/:id')
  getUserProfilebyId(@Req() req: Request, @Param('id') id: number) {
    console.log(id);
    return { profile: 'id' };
  }
}
