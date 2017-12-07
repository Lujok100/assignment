import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './user.model'
import { NgForm } from '@angular/forms'
@Component({
    templateUrl: 'app/components/user/register.component.html'

})

export class RegisterComponent {
    user: IUser
    constructor(private auth: AuthService, private router: Router, private userService: UserService) { }

    registerUser(formValues) {
        if (formValues.password != formValues.confirmPassword)
            throw new Error("Passwords do not match")
        else if (formValues.username == null || formValues.password == null || formValues.firstName == null || formValues.lastName == null)
            throw new Error("Please fill in all fields")
        else {
            let temp = this.userService.createUser(formValues.username, formValues.password, formValues.firstName, formValues.lastName)
            this.auth.loginUser(formValues.username, formValues.password)
            this.router.navigate(['/user', temp])
        }
    }
}