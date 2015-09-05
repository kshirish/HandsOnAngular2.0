// TypeScript
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

@Component({
  selector: 'display',
  //appInjector: [FriendsService]
})

@View({
template: `
	  <p>My name: {{ myName }}</p>
	  <p>Friends:</p>
	  <ul>
	     <li *ng-for="#name of names">
	        {{ name }}
	     </li>
	  </ul>

	  <p *ng-if="names.length > 3">You have many friends!</p>
	`,
	directives: [NgFor, NgIf]
})

class DisplayComponent {
  myName: string;
  names: Array<string>;
//  constructor(fs: FriendsService) {
	constructor() {
    this.myName = "Alice";
    this.names  = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
//    this.names = fs.names;
  }
}

class FriendsService {
  names: Array<string>;
  constructor() {
    this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}

bootstrap(DisplayComponent);