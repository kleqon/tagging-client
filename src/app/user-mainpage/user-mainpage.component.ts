import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-mainpage',
  templateUrl: './user-mainpage.component.html',
  styleUrls: ['./user-mainpage.component.scss']
})
export class UserMainpageComponent {
  constructor(private route:Router){}
  ngOnInit():void{

  }

}
