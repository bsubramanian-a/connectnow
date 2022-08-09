import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { ContactComponent } from '../modules/contact/contact.component';


@NgModule({
  declarations: [
    HeaderComponent,
    GameComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    GameComponent
  ]
})
export class SharedModule { }
