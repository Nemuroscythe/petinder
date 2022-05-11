export default class Pet {
    id;
    name;
    kind;
    image;
    profileText;
    popularity;

    constructor(id, name, kind, image, profileText, popularity) {
        this.id = id;
        this.name = name;
        this.kind = kind;
        this.image = image;
        this.profileText = profileText;
        this.popularity = popularity;
    }
}