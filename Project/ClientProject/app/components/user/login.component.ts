import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { UserService } from '../../services/UserService'
import { IUser } from './user.model'
import { NgForm } from '@angular/forms'

@Component({
    templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {

    userName = null;
    password = null;
    user: IUser 

    constructor(private router: Router, private authService: AuthService) { }

    login(userName, password) {
        this.authService.loginUser(userName, password)
            .map((response) => {
                console.log("Getting authentication result from server");
                let user = response.json();
                console.log("login result: " + user);
                if (user != null) {
                    this.router.navigate(['/user', user.id]);
                }
            })
            .subscribe((response) => {
                console.log("Success");
            }, (error) => {
                console.log("Error: " + error);
            });
    }

    register() {
        this.router.navigate(["/user/register"]);
    }
}