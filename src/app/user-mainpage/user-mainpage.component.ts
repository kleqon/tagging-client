import { Component } from '@angular/core';
import { Router } from '@angular/router';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-user-mainpage',
  templateUrl: './user-mainpage.component.html',
  styleUrls: ['./user-mainpage.component.scss']
})

export class UserMainpageComponent {
  constructor(private route:Router){}
  ngOnInit():void{

  }
  
OnClickCheck(){
  
}
OnClickRecycle(){
  
}
OnClickBlackList(){
  
}

}
