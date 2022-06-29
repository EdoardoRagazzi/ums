import { User } from './interfaces/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userSelected : User;

  updateUser(user: User){
    this.userSelected = user;
  }
 
}
