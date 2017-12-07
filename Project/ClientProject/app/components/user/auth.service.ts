import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Subject, Observable } from 'rxjs/RX'

@Injectable()
export class AuthService {
    currentUser: IUser
    constructor(private http: Http) { }

    loginUser(userName: string, password: string) {


        this.http.get("http://localhost:50644/api/user/GetUserByCredentials?username=" +
            userName +
            "&password=" +
            password).map((response: Response) => {
                return <IUser>response.json();
            }).subscribe(
            user => {
                this.currentUser = user;
                console.log(this.currentUser)
            }
            )
    }
    loginNewRegister() {

    }

    logoutUser() {
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}