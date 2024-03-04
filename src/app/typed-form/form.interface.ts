import { FormControl } from '@angular/forms'
export interface ProductDetails{
    productName:FormControl<string>;
    quantity:FormControl<number>;
    price:FormControl<number>
    discountAmount:FormControl<number|null>
}