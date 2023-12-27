import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getWeather(postCode: string): Promise<any> {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${postCode},TH&appid=65c30b3194d7c141789fc9f4789c59e2`,
    );
    const data = response.data;
    return data;
  }
}
