import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService implements IArticlesService {
	getArticle(): string {
		return "Hello World!"
	}
}