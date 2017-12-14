import { Component } from '@angular/core'
import { AuthService } from '../components/user/auth.service'
import { WebsiteService } from '../websites/shared/website.service'
import { IEmployee } from '../websites/shared/website.model'
@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size:15px;}
        #searchForm {margin-right:100px;}
        @media (max-width: 1200px){ #searchForm {display:none}}
        li > a.active {color: #F97924;}
        `]
})

export class NavbarComponent {

    foundEmployees: IEmployee[]
    foundBook:any
    constructor(private auth: AuthService, private websiteService: WebsiteService) { }


    searchBooks(searchTermForm) {
        this.websiteService.getSummaryByIsbn(searchTermForm.searchTerm).subscribe(
            book => {
                this.foundBook = book

            })
    }

    searchEmployees(searchTermForm) {
        this.websiteService.searchEmployees(searchTermForm.searchTerm).subscribe(
            employees => {
                this.foundEmployees = employees

            })

    }
}