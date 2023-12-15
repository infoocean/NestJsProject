import { Body, Controller, Get, Header, HttpCode, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/role')
export class RoleControllers {
  @Post('/add')
  @Header('Content-Type' , 'application/json')
  @Header('x-access-token',"token")
  getUserProfilebyId(@Req() req: Request, @Res({passthrough:true}) res: Response, @Body() data:Record<string,any>) {
    console.log(data)
    res.status(201);
    return req.body;
  }
}
