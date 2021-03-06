import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _productService:ProductService) { }
  productList;
  ngOnInit() {
    this._productService.getAllProducts().subscribe((res)=>{
      this.productList=res;
      console.log(res);
    });
  }

}
