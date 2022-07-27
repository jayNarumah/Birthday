import { Routes } from '@angular/router';
 
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';


export const AuthLayoutRoutes: Routes = [
    {
        path: "",
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginPageComponent },
        ],
    },

    // { path: 'rtl',          component: RtlComponent },
];
