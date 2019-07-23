const mainBoard = document.querySelector("#main");
const character1 = new Character("num", "Images/the_nun.jpg", { x: "", y: "" })
const character2 = new Character("jason", "Images/jason.jpg", { x: "", y: "" })
const character3 = new Character("fredy", "Images/freddy_krueger.jpg", { x: "", y: "" })
const character4 = new Character("annabelle", "Images/annabelle.jpg", { x: "", y: "" })
const character5 = new Character("Chucky", "Images/Chucky.jpg", { x: "", y: "" })
const character6 = new Character("Michael_myers", "Images/Michael_myers.jpg", { x: "", y: "" })
const character7 = new Character("Samara", "Images/Samara.jpg", { x: "", y: "" })

const characters = [];
//
characters.push(character1, character2, character3, character4, character5, character6, character7)

for (let index = 0; index < characters.length; index++) {

}

characters.forEach(function (character) {
    console.log(character)
});

function draw(arr) {
    mainBoard.innerHTML = "";
    arr.forEach(function (character) {
        mainBoard.append(character.getCard(160, 200))

    });
}



document.querySelector("#generate").addEventListener("click", drawHandler); 


function drawHandler() {
    draw(characters);
}
