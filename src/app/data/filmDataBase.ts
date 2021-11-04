import { Film } from "./film";
import { FilmCategory } from "./filmCategory";

export class FilmDB{
    description:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    lenghtOfDescription : number = this.description.length;
    Films: Film[] = [
                    new Film("Interstellar", new Date("2014-12-11"), 5, FilmCategory.SCIFI, false, "WarnerBros", this.description, this.lenghtOfDescription),
                    new Film("The Matrix", new Date("1999-04-07"), 2, FilmCategory.SCIFI, false, "Pixar", this.description, this.lenghtOfDescription),
                    new Film("The Hangover", new Date("2009-01-09"), 7, FilmCategory.COMEDY, false, "Colombia Studio", this.description, this.lenghtOfDescription),
                    new Film("John Wick", new Date("2014-03-06"), 0, FilmCategory.ACTION, false, "Lion's gate", this.description, this.lenghtOfDescription)
                    ];
}