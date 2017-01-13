import { Component } from '@angular/core';
import { Hero } from './shared/models/hero';

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{ title }}</h1>
  	<h2>{{ hero.name }} details!</h2>
  	<div>
  		<label>id: </label> {{ hero.id }}
  	</div>
  	<div>
		<label>name: </label> <input type="text" value="{{ hero.name }}" placeholder="name" />
  	</div>`,
})

export class AppComponent  { 
	title = 'Tour of heroes'; 
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}
}
