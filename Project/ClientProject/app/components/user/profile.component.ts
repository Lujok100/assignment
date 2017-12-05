import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './user.model'
import { NgForm } from '@angular/forms'
@Component({
    templateUrl: 'app/components/user/profile.component.html'

})

export class ProfileComponent {
    user: IUser
    constructor(private auth: AuthService, private router: Router, private userService: UserService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.user = this.userService.findUserById(+this.route.snapshot.params['uid'])
    }

    logout() {
        this.auth.logoutUser()
    }

    update(formValues) {
        let newUser = {
            id: this.auth.user.id,
            userName: formValues.username,
            password: formValues.password,
            firstName: formValues.firstName,
            lastName: formValues.lastName
        } as IUser
        this.userService.updateUser(this.auth.user.id, newUser)
    }
}
    

