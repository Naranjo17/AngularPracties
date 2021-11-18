import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Products = [
    {
      id:"ABCJDIHD",
      name:"Tshirt",
      description:"lorem ipsum usgfyegfy"
    },
    {
      id:"ABCfslfmksfnfjn",
      name:"Shoes",
      description:"lorem ipsum usgfyegfy nhdbfhfbfvy"
    },
    {
      id:"ABygtfrdrxseswa",
      name:"Handbags",
      description:"siasa sisas sisas"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
