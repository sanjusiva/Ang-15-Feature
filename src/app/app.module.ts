import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { NgOptimizedImage } from '@angular/common';
import { SampledirectiveDirective } from './directives/sampledirective.directive'
@NgModule({
  declarations: [
    AppComponent,
    TypedFormComponent,
    // SampledirectiveDirective,
    // LazyloadComponent,
    // NewloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
