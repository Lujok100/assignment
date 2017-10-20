"use strict";
var login_component_1 = require("./components/user/login.component");
var profile_component_1 = require("./components/user/profile.component");
exports.appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'user/:uid', component: profile_component_1.ProfileComponent },
    { path: '', component: login_component_1.LoginComponent }
];
//# sourceMappingURL=routes.js.map