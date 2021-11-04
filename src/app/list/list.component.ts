import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../data/film';
import { FilmDB } from '../data/filmDataBase';

@Component({
  selector: 'app-list', 
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  array : Film[] = [];
  ngOnInit(): void {
    var dataBase = new FilmDB();
    this.array = dataBase.Films;
  }
  Rent(item: Film): void{
    item.ammount -= 1;
    console.log(this.array);
  }
}
