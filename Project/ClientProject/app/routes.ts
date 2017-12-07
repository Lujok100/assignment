import { Routes } from '@angular/router'
import { WebsitesListComponent } from './websites/websites-list.component'
import { WebsiteDetailsComponent } from './websites/website-details/website-details.component'
import { CreateWebsiteComponent } from './websites/create-website.component'
import { WebsitesListResolver } from './websites/websites-list-resolver.service'
import { LoginComponent } from './components/user/login.component'
import { ProfileComponent } from './components/user/profile.component'
import { RegisterComponent } from './components/user/register.component'

export const appRoutes: Routes = [
    { path: 'websites/new', component: CreateWebsiteComponent },
    //{ path: 'websites', component: WebsitesListComponent },
    { path: 'websites', component: WebsitesListComponent, resolve: { websites: WebsitesListResolver } },

    { path: 'websites/:id', component: WebsiteDetailsComponent },
    // /websites/1 or /websites/foo
    { path: 'login', component: LoginComponent },
    { path: 'user/:uid', component: ProfileComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/websites', pathMatch: 'full' }
]