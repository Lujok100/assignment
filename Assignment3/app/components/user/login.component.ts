import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { FormsModule } from '@angular/forms'
import { IUser } from './user.model'
@Component({
    templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {
    errorMessage: any
    constructor(private userService: UserService, private router: Router) {
    }
    login(userForm) {
        this.errorMessage = "";
        let user = this.userService.findUserByCredentials(userForm.userName, userForm.password);
        if (user) {
            //redirect to /user/user.id
            this.router.navigate(['/user'])
        }
        else {
            //show error message
            this.errorMessage = "user not found."
        }
    }
}