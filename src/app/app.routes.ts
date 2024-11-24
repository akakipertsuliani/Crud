import { Routes } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecoverPasswordComponent } from './components/auth/recover-password/recover-password.component';

export const routes: Routes = [
    {
        path: "",
        component: SignInComponent
    },
    {
        path: "sign-up",
        component: SignUpComponent
    },
    {
        path: "recover-password",
        component: RecoverPasswordComponent,
    },
    {
        path: "**",
        component: NotFoundComponent
    },
];
