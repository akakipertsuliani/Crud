import { RouterModule, Routes } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {
        path: "",
        component: AuthComponent,
    },

    {
        path: "dashboard",
        component: UserpageComponent,
    },

    {
        path: "**",
        component: NotfoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};