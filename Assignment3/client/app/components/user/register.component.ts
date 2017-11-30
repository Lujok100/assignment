import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { FormsModule } from '@angular/forms'
import { IUser } from './user.model'

@Component({
  
    templateUrl: 'app/components/user/register.component.html'
})
export class RegisterComponent {

    
    counter = 0;
    
    

    constructor(private userService: UserService, private router: Router  ) {   

    }

    onsubmit(userForm) {
        console.log('form submit clicked..');
        
        if (userForm.userName) {
          //  this.userService.createUser(username, password);
            
                
            }
          
            this.counter++;
    }
}