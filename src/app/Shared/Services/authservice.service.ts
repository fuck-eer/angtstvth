// import { Router } from '@angular/router';
import { User } from './../../logindisp/user.modal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
import {  catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

interface authres{
    idToken:string;
email:string;
name?:string;
expiresIn:string;
admid:string;
}



@Injectable()
export class AuthService {
    username:string='log/sign';
user=new Subject<User>();
tokenexptimer:any
// private router:Router
    constructor(private http: HttpClient) { }



signin(name:string,email:string,password:string){
    
return this.http.post<authres>('http://localhost:8080/admin/auth',{
email:email,
password:password,    
name:name
})
.pipe(catchError(err=>{
    return throwError(err);
}),tap(resdata=>{
    
   this.retainuser(resdata.name,resdata.email,resdata.admid,resdata.idToken,+resdata.expiresIn)
}
)
)

}



login(email:string,password:string){

return this.http.post<authres>('http://localhost:8080/admin/auth',{
email:email,
password:password,    
name:""
}).pipe(catchError(err=>{
    return throwError(err);
}),tap(resdata=>{
    // console.log(resdata);
   
    this.retainuser(resdata.name,resdata.email,resdata.admid,resdata.idToken,+resdata.expiresIn)
 }
 )
)


}




autologin(){
const userdata:{
    name:string,
    email:string,
    id:string,
    _token:string,
    _tokenexpdate:string
}= JSON.parse( localStorage.getItem("userdata"));

if(!userdata){
    return;
}




const userloaded=new User(userdata.name, userdata.email,userdata.id,userdata._token,new Date(userdata._tokenexpdate))
if(userloaded.token){
    console.log('logged in with saved user');
    this.username='Hey, '+userdata.name;
  
    // console.log(userloaded);
    this.user.next(userloaded);
    const nexpdate=new Date(userdata._tokenexpdate).getTime()-new Date().getTime();
    this.autologout(nexpdate);
}

}


logout(){
    this.username='log/sign';
    localStorage.removeItem("userdata")
    this.user.next(null);
    // this.router.navigate(['/']);
if(this.tokenexptimer){
    clearTimeout(this.tokenexptimer);
}
this.tokenexptimer=null;
}

autologout(expduration:number){
    console.log('logged in time left: '+expduration);
    
   this.tokenexptimer= setTimeout(()=>{
        this.logout();
    },expduration)
}




retainuser(name:string,email:string,admid:string,token:string, expin:number){
    const expd=new Date(new Date().getTime()+ +expin*1000);
    const user=new User(name,email,admid,token,expd);
    this.username='Hey, '+name;
    // console.log(user);
    
    this.user.next(user);
this.autologout(expin*1000);
    localStorage.setItem("userdata", JSON.stringify(user));
}



}