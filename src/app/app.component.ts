import { User } from './classes/User';
import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showForm : boolean = false;
  
  userSelected : User = new User();

  updateUser(user: User){
    this.showForm = true;
    this.userSelected = user;
  }
  newUser(){
    this.userSelected = new User();
     this.showForm = true;
  }
 
}
