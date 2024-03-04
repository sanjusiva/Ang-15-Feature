import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appSampledirective]',
  standalone:true
})
export class SampledirectiveDirective {
  @Input() public disabled = false;

  constructor() { }

}
