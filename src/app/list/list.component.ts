import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Film } from '../data/film';
import { FilmDB } from '../data/filmDataBase';

@Component({
  selector: 'app-list', 
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  array : Film[] = [];
  edit: boolean = false;
  ngOnInit(): void {
    var dataBase = new FilmDB();
    this.array = dataBase.Films;
  }
  Rent(item: Film): void{
    item.ammount -= 1;
    console.log(this.array);
  }
  ShowEdit(){
    this.edit =! this.edit;
    console.log(this.edit);
  }
  updated(oldFilm:Film, index : number){
    this.array[index] = oldFilm;
    console.log(this.array);
    this.edit = false;
  }
  addNew(newFilm : Film){
    newFilm.ammount =+ 1;
    this.array.push(newFilm);
  }
}
