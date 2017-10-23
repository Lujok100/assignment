﻿import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { WebsitesAppComponent } from './websites-app.component'
import { UserService } from './services/user.service'
import { Routes, RouterModule } from '@angular/router'
import { appRoutes } from './routes'
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './components/user/login.component'
import { ProfileComponent } from './components/user/profile.component'
import { RegisterComponent } from './components/user/register.component'
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
    declarations: [WebsitesAppComponent, LoginComponent, ProfileComponent, RegisterComponent],
    bootstrap: [WebsitesAppComponent],
    providers: [UserService]

})

export class AppModule {
}