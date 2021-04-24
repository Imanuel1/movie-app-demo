export default class MovieModel {
    constructor(name, length, img, director, mainStars){
        this.name = name;
        this.length = length + " minutes";
        this.img = img===""? "" : "https://image.tmdb.org/t/p/w500"+img;
        this.director = director.map(person => person.name +" ");
        this.mainStars = mainStars.map(person => person.name + " ("+ person.character+") ");
    }
}

