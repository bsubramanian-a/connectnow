import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { WithoutsidebarComponent } from './layouts/withoutsidebar/withoutsidebar.component';
import { ContactComponent } from './modules/contact/contact.component';
import { VideogamesComponent } from './modules/videogames/videogames.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[{
    path:'',
    component:VideogamesComponent
  }]
},{
  path:'contact',
  component: WithoutsidebarComponent ,
  children:[{
    path:'',
    component:ContactComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
