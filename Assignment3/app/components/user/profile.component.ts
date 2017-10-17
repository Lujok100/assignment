import {Component } from '@angular/core'
import {UserService} from '../../services/user.service'
import {ActivatedRoute} from '@angular/router'
@Component({
	templateUrl: 'app/components/user/profile.component.html'
})

export class LoginComponent  {
    
    constructor(private userService: UserService) {
    }

}
user:IUser
constructor(private route: ActivatedRoute) {
    }
ngOnInit() {
        this.user = this.userService.findUseById(this.route.snapshot.params['uid'])

    }
