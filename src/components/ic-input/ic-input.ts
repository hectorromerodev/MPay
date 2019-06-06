import { Component, Input } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'ic-input',
  templateUrl: 'ic-input.html'
})
export class IcInputComponent {

  @Input() type: string = "text";
  @Input() Placeholder: string = "text";

  constructor() {
  }

}
