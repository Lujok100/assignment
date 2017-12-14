import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { UserService } from '../../services/UserService'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './user.model'
import { NgForm } from '@angular/forms'
import 'rxjs/add/operator/map'
@Component({
    templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {

    constructor(private router: Router) { }

   

    register(userName, password, email) {
        this.router.navigate(['/user/profile']);
    }

    cancel() {
        this.router.navigate(["/user/login"]);
    }

}