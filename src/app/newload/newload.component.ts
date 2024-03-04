import { Component, inject, OnInit } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { SampledirectiveDirective } from '../directives/sampledirective.directive';
@Component({
  selector: 'app-newload',
  standalone:true,
  imports:[NgOptimizedImage],
  hostDirectives: [{
    directive: SampledirectiveDirective,
    inputs: ['disabled'],
  }],
  templateUrl: './newload.component.html',
  styleUrls: ['./newload.component.scss']
})
export class NewloadComponent implements OnInit {
  private readonly disabledState: SampledirectiveDirective = inject(SampledirectiveDirective, { self: true });
  ngOnInit() {
    console.log("here: ",this.disabledState.disabled);
  }
}
