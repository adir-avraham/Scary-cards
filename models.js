//template for creating objects

class Character {
    // new ClassName = > constructor
    constructor(name, imageUrl) {
        this.id = `charactes_${Math.round(Math.random() * 999)}`;
        this.name = name;
        this.imageUrl = imageUrl
        this.x = `${Math.round(Math.random() * 999)}px`;
        this.y = `${Math.round(Math.random() * 700)}px`;

    }

    //behaviour


    setPos() {
        this.x = `${Math.round(Math.random() * 999)}px`;
        this.y = `${Math.round(Math.random() * 700)}px`;
    }

    setXpos(xpos) {
        // this.x = parseInt(this.x) + xpos + "px"
        this.x = `${parseInt(this.x) + xpos}px`
    }

    setYpos(ypos) {
        // this.x = parseInt(this.x) + xpos + "px"
        this.y = `${parseInt(this.y) + ypos}px`
    }

    getCard(w, h) {
        const characterUI = document.createElement("div");
        const img = document.createElement("img");
        
        const rightButton = document.createElement("Button");
        rightButton.innerText = "R";
        rightButton.className = "btn btn-danger";
        rightButton.addEventListener("click", moveRight);

        const leftButton = document.createElement("Button");
        leftButton.innerText = "L";
        leftButton.className = "btn btn-danger";
        leftButton.addEventListener("click", moveLeft);
        
        const upButton = document.createElement("Button");
        upButton.innerText = "UP";
        upButton.className = "btn btn-danger";
        upButton.addEventListener("click", moveUp);

        const downButton = document.createElement("Button");
        downButton.innerText = "D";
        downButton.className = "btn btn-danger";
        downButton.addEventListener("click", moveDown);

        img.src = this.imageUrl
        img.height = w;
        img.width = h;
        img.style.borderRadius = "5%";
        //img.style.border = "3px solid grey";
        characterUI.append(img, rightButton, leftButton, upButton, downButton)
        characterUI.style.position = "absolute"
        characterUI.style.left = this.x
        characterUI.style.top = this.y  

        return characterUI;
    }


}
