import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { UserService } from '../../services/UserService'
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
        this.userService.findUserById(+this.route.snapshot.params['uid']).subscribe(
            user => {
                this.user = user;
            }
        )
    }

    logout() {
        this.auth.logoutUser()
    }

    update(formValues) {
        let newUser = {
            id: this.user.id,
            username: formValues.username,
            password: formValues.password,
            firstName: formValues.firstName,
            lastName: formValues.lastName
        } 
        this.userService.updateUser(this.user.id, newUser)
    }

    delete(userId) {
        this.userService.deleteUser(userId)
    }
}