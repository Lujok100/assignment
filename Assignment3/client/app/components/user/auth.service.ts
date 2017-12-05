import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'

@Injectable()
export class AuthService {
    constructor(private router: Router, private userService: UserService) { }
    user: IUser
    loginUser(username: string, password: string) {
        let user = this.userService.findUserByCredentials(username, password)
        if (user) {
            this.router.navigate(['/user', user.id])
        }
        else {
            throw new Error("Credentials Not Valid")
        }
    }

    logoutUser() {
        this.user = null;
    }

    isAuthenticated() {
        return !!this.user;
    }
}