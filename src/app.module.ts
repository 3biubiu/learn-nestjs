import { Module } from '@nestjs/common';
import { AppController,PersonController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [AppController,PersonController ],
  providers: [AppService],
})
export class AppModule {}
