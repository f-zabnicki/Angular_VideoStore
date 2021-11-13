import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Film } from 'src/app/data/film';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  @Input() toBeEdited? : Film; 
  @Output() newFilm : any = new EventEmitter<Film>();
  
  add: boolean = false;
  flexCheckDefault: boolean = false;
  form = new FormGroup({
    title: new FormControl(`${this.toBeEdited?.title}`),
    addedDate: new FormControl(`${this.toBeEdited?.addedDate}`),
    category: new FormControl(`${this.toBeEdited?.category}`),
    production: new FormControl(`${this.toBeEdited?.production}`),
    description: new FormControl(`${this.toBeEdited?.description}`)
  });
  constructor() { 
  }
  
  onSubmit(): any{
    this.newFilm.emit(this.form.value);
  }

  ngOnInit(): void {
    this.form.setValue({
      title: this.toBeEdited?.title,
      addedDate: this.toBeEdited?.addedDate,
      category: this.toBeEdited?.category,
      production: this.toBeEdited?.production,
      description: this.toBeEdited?.description
    });
  }

  AgeRestriction(){
    this.flexCheckDefault = !this.flexCheckDefault;
  }
  ShowAdd():void{
    this.add = !this.add;
  }

}
