export class Recipe {
    public name: string;
    public descrption: string;
    public imagePath: string;

    constructor(name: string, desc: string, imgpath: string) {
        this.name = name;
        this.descrption = desc;
        this.imagePath = imgpath;
    }
}