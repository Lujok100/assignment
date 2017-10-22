import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { FormsModule } from '@angular/forms'
import { IUser } from './user.model'

@Component({
    selector: 'side-panel',
    templateUrl: 'app/components/register.component.html'
})
export class RegisterComponent {

   
    constructor(private userService: UserService, ) {
        newuser: UserService[] = [];
        counter = 0;

    }

    onsubmit(userForm) {
        console.log('form submit clicked..');
        let user = this.userService.findUserByCredentials(userForm.userName, userForm.password);
        if (user) {
            this.UserService.push(this.UserService);
                
            }
          
        
            this.counter++;
    }
}