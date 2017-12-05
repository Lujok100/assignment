import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { IUser } from './user.model'
import { Http, Response } from '@angular/http'
@Injectable()

export class UserService {
    constructor(private http: Http) { }


    getUsers(): Observable<IUser[]> {

        return this.http.get("http://localhost:60938/api/websites").map((response: Response) => {
            return <IUser[]>response.json();
        }).catch(this.handleError)
    }


    getWebsite(id: number): Observable<IUser> {
        return this.http.get("http://localhost:60938/api/websites/" + id).map((response: Response) => {
            return <IUser>response.json();
        }).catch(this.handleError)
    }
}