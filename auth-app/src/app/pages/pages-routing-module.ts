import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { About } from './about/about';
import { Contact } from './contact/contact';

const routes: Routes = [
  {path:'',component:Dashboard},
  // {path:'/about',component:About},
  // {path:'/contact',component:Contact}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
