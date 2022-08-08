import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';


@NgModule({
  declarations: [
    HeaderComponent,
    GameComponent
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
