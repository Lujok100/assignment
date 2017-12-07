"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var websites_list_component_1 = require("./websites/websites-list.component");
var website_details_component_1 = require("./websites/website-details/website-details.component");
var create_website_component_1 = require("./websites/create-website.component");
var websites_list_resolver_service_1 = require("./websites/websites-list-resolver.service");
var login_component_1 = require("./components/user/login.component");
var profile_component_1 = require("./components/user/profile.component");
var register_component_1 = require("./components/user/register.component");
exports.appRoutes = [
    { path: 'websites/new', component: create_website_component_1.CreateWebsiteComponent },
    //{ path: 'websites', component: WebsitesListComponent },
    { path: 'websites', component: websites_list_component_1.WebsitesListComponent, resolve: { websites: websites_list_resolver_service_1.WebsitesListResolver } },
    { path: 'websites/:id', component: website_details_component_1.WebsiteDetailsComponent },
    // /websites/1 or /websites/foo
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'user/:uid', component: profile_component_1.ProfileComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: '', redirectTo: '/websites', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map