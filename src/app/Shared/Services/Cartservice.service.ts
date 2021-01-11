import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService{
constructor(private http:HttpClient){

}
//view cart(not now)

//addd cart, updatecart("/addcart")

addtocart(){

    return this.http.post('http://localhost:8080/addCart',{
        userId:'USR-01',
        productId:'SHO-01',
        quantity:1
    }).pipe(catchError(err=>{
        return throwError(err);
    }))




}








}