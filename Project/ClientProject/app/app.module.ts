﻿import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CreateWebsiteComponent } from './websites/create-website.component'
import { WebsitesListResolver } from './websites/websites-list-resolver.service'
import { BrowserModule } from '@angular/platform-browser'
import { WebsitesAppComponent } from './websites-app.component'
import { UserService } from './services/user.service'
import { Routes } from '@angular/router'
import { appRoutes } from './routes'
import { FormsModule } from '@angular/forms'
import { AuthService } from './components/user/auth.service'
import { LoginComponent } from './components/user/login.component'
import { ProfileComponent } from './components/user/profile.component'
import { RegisterComponent } from './components/user/register.component'
import { JQ_TOKEN } from './common/jQuery.service'
import { SimpleModalComponent } from './common/simple-modal.component'
import { ModalTriggerDirective } from './common/modal-trigger.directive'
import { HttpModule } from '@angular/http'
import { WebsitesListComponent } from './websites/websites-list.component';
import { WebsiteThumbnailComponent } from './websites/website-thumbnail.component';
import { WebsiteDetailsComponent } from './websites/Website-details/website-details.component';
import { NavbarComponent } from './nav/navbar.component';
import { WebsiteService } from './websites/shared/website.service';

declare let jQuery: Object

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
    declarations: [WebsitesAppComponent, LoginComponent, ProfileComponent, RegisterComponent,
        WebsitesListComponent,
        WebsiteThumbnailComponent,
        NavbarComponent,
        WebsiteDetailsComponent,
        CreateWebsiteComponent,
        LoginComponent,
        SimpleModalComponent,
        ModalTriggerDirective
    ],
    
    providers: [UserService,
        WebsiteService,
        WebsitesListResolver,
        AuthService,
        { provide: JQ_TOKEN, useValue: jQuery }
    ],
    bootstrap: [WebsitesAppComponent]

})

export class AppModule {
}