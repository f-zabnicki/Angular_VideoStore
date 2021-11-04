import { FilmCategory } from "./filmCategory";

export class Film{
    title: string;
    addedDate: Date;
    ammount: number;
    category: FilmCategory;
    toggle: boolean;
    production: string;
    description: string;
    lenghtOfDescription:number;

    constructor(title: string, date: Date, ammount: number, category: FilmCategory, toggle: boolean, production: string, description: string, lenghtOfDescription: number) {
        this.ammount = ammount;
        this.title = title;
        this.category = category;
        this.addedDate = date;
        this.toggle = toggle;
        this.production = production;
        this.description = description;
        this.lenghtOfDescription = lenghtOfDescription; 
    }
}