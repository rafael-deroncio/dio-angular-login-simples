import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-text-component',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  @Input() placeholder: string;
  @Input() variant: string;
}
