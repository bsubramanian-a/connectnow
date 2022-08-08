import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ContactComponent } from './modules/contact/contact.component';
import { VideogamesComponent } from './modules/videogames/videogames.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[{
    path:'',
    component:VideogamesComponent
  },{
    path:'contact',
    component:ContactComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
