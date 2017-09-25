import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../shared/services/products.service";
import { Product } from "../../shared/models/product";

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit {
  products: Product[] = [];
  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    this.fetchProducts(1);
  }

  //Get all products belong to given parent id
  fetchProducts(parentId: number) {
    this.productSvc.getProductsByParentId(parentId)
      .subscribe((products) => this.products = products);
  }

}
