import { CartService } from './../Shared/Services/Cartservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartsec',
  templateUrl: './cartsec.component.html',
  styleUrls: ['./cartsec.component.css']
})
export class CartsecComponent implements OnInit {

  constructor(private cartS:CartService) { }

  ngOnInit(): void {
  }

  onclick(){
    this.cartS.addtocart().subscribe(e=>{
      
        alert('added to cart succesfully')
      
    })
  }

}
