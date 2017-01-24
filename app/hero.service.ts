import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './shared/models/hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
	private heroesUrl = 'api/heroes';

	constructor(private http: Http) {}

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
		.toPromise()
		.then(response => response.json().data as Hero[])
		.catch(this.handleError);
	}

	handleError(error: any): Promise<any> {
		console.log('An error occurred', error);
		return Promise.reject(error.message || error);
	}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
	        .then(heroes => heroes.find(hero => hero.id === id));
	}
}
