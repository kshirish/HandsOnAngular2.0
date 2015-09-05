import {Component, View, bootstrap} from 'angular2/angular2';
import {ChildComponent} from 'child';

//TypeScript
@Component({
  selector: 'parent'
})

@View({
  template: `
    <h1>{{ message }}</h1>
    <child></child>
  `,
  directives: [ChildComponent]
})

class ParentComponent {
  message: string;
  constructor() {
    this.message = "I'm the parent";
  }
}


bootstrap(ParentComponent);
