import { Component } from '@angular/core';
import { Hero } from './shared/models/hero';
import { HeroService} from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: '../templates/heroes.component.html',
  styleUrls: ['../css/heroes.component.css']
})

export class HeroesComponent implements OnInit { 
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private heroService: HeroService, 
		private router: Router) {}

	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		console.log(hero);
	}

	getHeroes(): void {
    	// this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  	}

  	gotoDetail(): void {
	  this.router.navigate(['/detail', this.selectedHero.id]);
	}
}
