"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./components/user/login.component");
//import { RegisterComponent } from './components/user/Register.component'
var profile_component_1 = require("./components/user/profile.component");
exports.appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'user/:uid', component: profile_component_1.ProfileComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map