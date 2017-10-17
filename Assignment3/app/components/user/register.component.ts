import {Component } from '@angular/core'
import {UserService} from '../../services/user.service'

@Component({
	templateUrl: 'app/components/user/register.component.html'
})

export class LoginComponent  {
    
    constructor(private userService: UserService) {
    }

}
