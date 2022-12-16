import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  showFiller=false;
  constructor(private route:Router){}
  ngOnInit():void{

  }
  navigateToUserPage(){
    this.route.navigate(['usermainpage']);
  }
}
