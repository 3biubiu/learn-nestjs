import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('api/person')
export class PersonController {
  // query 要放在urlparam前面 nest 从上往下匹配 上面的优先匹配
  @Get('find')
  query(@Query('name') name:string, @Query('age') age:number) {
    return `received: name=${name},age=${age}`
  }
  @Get(':id')
  urlParam(@Param('id') id:string) {
    return `id = ${id}`
  }
}
