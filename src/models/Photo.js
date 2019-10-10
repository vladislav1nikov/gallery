export default class Photo {
    #name = "";
    #author = "";
    #link = "";
    constructor(name, author, link) {
        this.name = name;
        this.author = author;
        this.link = link;
    }
    set name(value) {
        if (value.length >= 3) this.#name = value;
        else throw new Error("Name: empty argument");
    }
    get name() {
        return this.#name;
    }
    set author(value) {
        if (value.length >= 3) this.#author = value;
        else throw new Error("Author: empty argument");
    }
    get author() {
        return this.#author;
    }
    set link(value) {
        if (value.length >= 3) this.#link = value;
        else throw new Error("Link: empty argument");
    }
    get link() {
        return this.#link;
    }
}