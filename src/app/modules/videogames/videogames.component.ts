import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.scss']
})
export class VideogamesComponent implements OnInit {

  games:Game[] | undefined;
  filteredGames:Game[] | undefined;
  searchName:string = '';

  constructor(
    private gameService: GamesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.gameService.getGames().subscribe((games) => {
      this.games = this.filteredGames = <Game[]>games;
      this.spinner.hide()
    });
  }

  search() {
    if (this.searchName !== "") {
      console.log(this.searchName)
      let searchValue = this.searchName.toLocaleLowerCase();
      this.filteredGames = this.filteredGames?.filter(game => game.name.toLocaleLowerCase().match(searchValue))
      if (this.filteredGames?.length == 0) {
        
      }
    } else {
      this.filteredGames = this.games;
    }
  }

  
}
