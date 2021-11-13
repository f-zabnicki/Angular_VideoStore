import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Film } from '../../data/film';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() addedFilm : any = new EventEmitter<Film>();
  add: boolean = false;
  flexCheckDefault: boolean = false;

  form = new FormGroup({
    title: new FormControl(""),
    author: new FormControl(""),
    addedDate: new FormControl(""),
    category: new FormControl(""),
    production: new FormControl(""),
    description: new FormControl("")
  });
  constructor() { }
  
  onSubmit(): any{
    this.addedFilm.emit(this.form.value);
  }

  ngOnInit(): void {
  }

  AgeRestriction(){
    this.flexCheckDefault = !this.flexCheckDefault;
  }
  ShowAdd():void{
    this.add = !this.add;
  }

}
