import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logindisp',
  templateUrl: './logindisp.component.html',
  styleUrls: ['./logindisp.component.css']
})
export class LogindispComponent implements OnInit {

showlogin:boolean=true;

  constructor(
    
  ) { }

  ngOnInit(): void {

  }


  togglelogin(){
    this.showlogin=!this.showlogin;
  }
getlogin(){
  return this.showlogin;
}

}
