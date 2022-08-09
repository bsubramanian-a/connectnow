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
  sortOption:string = 'Release Date';
  searchScore:any = null;

  constructor(
    private gameService: GamesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.gameService.getGames().subscribe((games) => {
      this.games = <Game[]>games;
      this.search();
      this.spinner.hide()
    });
  }

  search() {
    let searchValue = this.searchName.toLocaleLowerCase();
    this.filteredGames = this.games;
    if(this.searchName != ''){
      this.filteredGames = this.filteredGames?.filter(game => game.name.toLocaleLowerCase().match(searchValue))
    }
    if(this.searchScore){
      this.filteredGames = this.filteredGames?.filter(game => parseFloat(game.rating.toFixed(1)) ===  parseFloat(this.searchScore))
    }

    this.filteredGames = this.filteredGames?.sort((a,b) => {
      if(this.sortOption == 'Score'){
        return (a.rating > b.rating) ? -1 : ((b.rating > a.rating) ? 1 : 0)
      }
      if(this.sortOption == 'Release Date'){
        return b.first_release_date - a.first_release_date;
      }
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
    });
  }

  dropdownClick(option:any = null){
    if(option){
      this.sortOption = option;
      this.search();
    }
  }  

  clearFilter(){
    this.searchName = '';
    this.searchScore = '';
    this.sortOption = 'Release Date';
    this.search();
  }

  
}
