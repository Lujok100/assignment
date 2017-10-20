"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./components/user/login.component");
var profile_component_1 = require("./components/user/profile.component");
exports.appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'user/:uid', component: profile_component_1.ProfileComponent },
    { path: '', rediredTo: '/login', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map