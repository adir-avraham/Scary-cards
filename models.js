//template for creating objects

class Character {
    // new ClassName = > constructor
    constructor(name, imageUrl, pos) {
        this.id = `charactes_${Math.round(Math.random() * 999)}`;
        this.name = name;
        this.imageUrl = imageUrl
        this.x = pos.x
        this.y = pos.y

    }

    //behaviour


    setPicture(pic) {
        this.imageUrl = pic;
    }

    setXpos(xpos, ypos) {
        // this.x = parseInt(this.x) + xpos + "px"
        this.x = `${parseInt(this.x) + xpos}px`
        this.y = `${Math.floor (Math.random()* + ypos)}px`; 
    }



    getCard(w, h) {
        const characterUI = document.createElement("div")
        const img = document.createElement("img");
        img.src = this.imageUrl
        img.height = w;
        img.width = h;
        characterUI.append(img)
        characterUI.style.position = "absolute"
        characterUI.style.left = this.x
        characterUI.style.top = this.y
        return characterUI;
    }

}
