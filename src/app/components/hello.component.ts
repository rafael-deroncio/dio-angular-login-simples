import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-component',
  templateUrl: './hello.component.html',
  styleUrls: [ './hello.component.css' ]
})
export class HelloComponent  {
  @Input() name: string;
}
