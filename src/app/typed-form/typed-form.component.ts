import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductDetails } from './form.interface';

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.scss']
})
export class TypedFormComponent {
  shopping=new FormGroup<ProductDetails>({
    productName:new FormControl<string>('name', { nonNullable: true }),
    quantity:new FormControl<number>(1, { nonNullable: true }),
    price:new FormControl<number>(99, { nonNullable: true }),
    discountAmount:new FormControl<number>(0, { nonNullable: false }),
  })

  submitData(val:any){
    console.log("jk: ",this.shopping.controls);
    
    console.log("Submitted Value : ",val); 
  }
  
}
