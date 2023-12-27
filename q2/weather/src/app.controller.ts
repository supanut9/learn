import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getWeather(@Query('postCode') postCode: string) {
    console.log(postCode);
    return this.appService.getWeather(postCode);
  }
}
