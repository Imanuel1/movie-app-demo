
class ActorModel{
    constructor(plainActor, lname, birth, img, imdb){
        if( typeof plainActor === 'object'){
            this.fname = plainActor.fname;
            this.lname = plainActor.lname;
            this.birth = plainActor.birth;
            this.img = plainActor.img;
            this.imdb = plainActor.imdb;
        } else {
            this.fname = plainActor;
            this.lname = lname;
            this.birth = birth;
            this.img = img;
            this.imdb = imdb;
        }
        this.age = this.getAge(this.birth);
    }

    getAge(birth) {
        const birthDate = new Date(birth);
        const today = new Date();
        const diff = today.getTime() - birthDate.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
}

export default ActorModel