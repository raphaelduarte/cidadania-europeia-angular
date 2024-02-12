import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AplicationComponent } from './components/aplication/aplication.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'aplication',
        component: AplicationComponent
    }
];
