import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesComtroller } from './articles/articles.colltroler';
import { ArticlesService } from './articles/articles.service';

@Module({
	imports: [],
	controllers: [AppController, ArticlesComtroller],
	providers: [AppService, ArticlesService],
})
export class AppModule { }
