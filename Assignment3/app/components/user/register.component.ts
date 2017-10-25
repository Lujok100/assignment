import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { FormsModule } from '@angular/forms'
import { IUser } from './user.model'

@Component({
  
    templateUrl: 'app/components/register.component.html'
})
export class RegisterComponent {

    IUser: UserService[] = [];
    counter = 0;
    Service: UserService;
    

    constructor(private userService: UserService, private router: Router  ) {   

    }

    onsubmit(userForm) {
        console.log('form submit clicked..');
        this.Service = new (userForm.userName, userForm.password);
        if (userForm) {
            this.userService.createUser(userForm.userNmae);
            this.userService.createUser(userForm.password);
                
            }
          
            this.counter++;
    }
}