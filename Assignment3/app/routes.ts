import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './components/user/login.component'
//import { RegisterComponent } from './components/user/Register.component'
import { ProfileComponent } from './components/user/profile.component'

export const appRoutes = [
    { path: 'login', component: LoginComponent },
   // { path: 'register', component: RegisterComponent },
    { path: 'user/:uid', component: ProfileComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
]