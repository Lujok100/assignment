import { Component, OnInit } from '@angular/core'
import { UserService } from '../shared/user.service'
import { ActivatedRoute, Params } from '@angular/router'
import { IUser } from '../shared/user.model'
@Component({
    templateUrl: 'app/websites/user-details/user-details.component.html',

    styles: [
        `
	.container {padding-left:20px.padding-roght:20px}
	.user-image {height:100px}
	`
    ]
})
export class UserDetailsComponent implements OnInit {
    user: IUser
    constructor(private userService: UserService, private router: ActivatedRoute) { }

    ngOnInit() {
        this.router.params.forEach((params: Params) => {
            this.User = this.userService.getWebsite(+params['id'])
                
            })
        
    }
}
