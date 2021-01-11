// import { Router } from '@angular/router';
import { AuthService } from './../../Shared/Services/authservice.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cardsign',
  templateUrl: './cardsign.component.html',
  styleUrls: ['./cardsign.component.css']
})
export class CardsignComponent implements OnInit {

  @ViewChild('f') formdata:NgForm
  erroroc:boolean=false
error:string=''
// , private router:Router
  constructor(private authS:AuthService) { }

  ngOnInit(): void {
  }


  onsubmit(){
    this.authS.signin(this.formdata.form.controls.name.value,this.formdata.form.controls.email.value,this.formdata.form.controls.password.value).subscribe(resdata=>{
      console.log(resdata);
      this.formdata.reset();
      // this.router.navigate(['/'])
    },err=>{
      this.erroroc=true
      this.error=err.error.error.message.split('_').join(' ');
      
    })
    // console.log();
    
  }


}
