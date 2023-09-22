import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls:  ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string;
  @Input() variant: string;
  @Input() value: string;

  getAlert(name: string) {
    alert('action: ' + this.label + ': hello, ' + name + '!')
  }
}