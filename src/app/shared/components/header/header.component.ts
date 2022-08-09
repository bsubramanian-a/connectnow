import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  temp:boolean = false;
  constructor(
    private router: Router
  ) { 
    this.router.events.subscribe(() => {
      this.temp = this.router.url !== '/contact' ? true : false;
    });
  }

  ngOnInit(): void {
  }

  redirectTo(page:string){
    this.router.navigate([page])
  }
}
