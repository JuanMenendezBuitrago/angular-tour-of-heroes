import { Component } from '@angular/core';
import { Hero } from './shared/models/hero';
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{ title }}</h1>
  	<h2>My Heroes</h2>
	<ul class="heroes">
		<li *ngFor="let hero of heroes">
			<span class="badge">{{ hero.id }}</span> {{ hero.name }}
		</li>
	</ul>`,
	styles: [`
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.heroes {
			list-style-type: none;
			margin: 0 0 2em 0;
			padding: 0;
			width: 15em;
		}
		.heroes li {
			background-color: #EEE;
			border-radius: 4px;
			cursor: pointer;
			height: 1.6em;
			left: 0;
			margin: 1.5em;
			padding: .3em 0;
			position: relative;
		}
		.heroes li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		}
		.heroes li:hover {
			background-color: #DDD;
			color: #607D8B;
			left: .1em;
		}
		.heroes .text {
			position: relative;
			top: -3px;
		}
		.heroes .badge {
			background-color: #607D8B;
			border-radius: 4px 0 0 4px;
			color: white;
			display: inline-block;
			font-size: small;
			height: 3.8em;
			left: -1px;
			line-height: 1em;
			margin-right: .8em;
			padding: 0.8em 0.7em 0 0.7em;
			position: relative;
			top: -4px;
		}
	`]
})

export class AppComponent  { 
	title = 'Tour of heroes'; 
	heroes = HEROES;
	hero: Hero = HEROES[0];
}
