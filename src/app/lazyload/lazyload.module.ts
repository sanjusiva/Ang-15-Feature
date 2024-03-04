import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyloadRoutingModule } from "./lazyload-routing";
import { LazyloadComponent } from "./lazyload.component";

@NgModule({
    declarations: [
     LazyloadComponent
    ],
    imports: [
     CommonModule,
     LazyloadRoutingModule
    ]
  })
  export class LazyloadModule { }