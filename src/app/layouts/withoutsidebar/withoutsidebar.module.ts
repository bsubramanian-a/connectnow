import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithoutsidebarComponent } from './withoutsidebar.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    WithoutsidebarComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class WithoutsidebarModule { }
