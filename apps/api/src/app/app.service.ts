import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Здесь могла быть ваша реклама!! Но преподам geekbrains вообще похер=)' };
  }
}
