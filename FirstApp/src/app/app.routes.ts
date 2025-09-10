import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { User } from './user/user';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'about', component:About},
    {path:'contact', component:Contact},
    {path:'login', component:Login},
    // Data Pasiing between Routing
    {path:'profile', component:Profile,data:{name:'HElo'}},
    {path:'user/:id/:name', component:User},
    {path:'**', component:PageNotFound}
];
