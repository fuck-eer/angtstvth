// import { Router } from '@angular/router';
import { AuthService } from './../../Shared/Services/authservice.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cardlog',
  templateUrl: './cardlog.component.html',
  styleUrls: ['./cardlog.component.css']
})
export class CardlogComponent implements OnInit {

@ViewChild('f') formdata:NgForm
erroroc:boolean=false
error:string=''
// , private router: Router
  constructor(private authS:AuthService) { }

  ngOnInit(): void {
  
  }

  onlogin(){
    this.erroroc=false
    this.authS.login(this.formdata.form.controls.email.value,this.formdata.form.controls.password.value).subscribe(resdata=>{
      console.log(resdata);
      // this.router.navigate(['/'])
    },err=>{
      this.erroroc=true;
      this.error=err.error.error.message.split('_').join(' ')
    })
  }


}
