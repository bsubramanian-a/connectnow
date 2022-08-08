import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(
    private httpClient: HttpClient
  ) { }

  public getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>("https://public.connectnow.org.uk/applicant-test/")
  }
}
