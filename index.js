const mainBoard = document.querySelector("#main");
const character1 = new Character("num", "Images/the_nun.jpg", { x: "500px", y: "100px" })
const character2 = new Character("jason", "Images/jason.jpg", { x: "400px", y: "200px" })
const character3 = new Character("fredy", "Images/freddy_krueger.jpg", { x: "300px", y: "300px" })
const character4 = new Character("annabelle", "Images/annabelle.jpg", { x: "200px", y: "400px" })
const character5 = new Character("Chucky", "Images/Chucky.jpg", { x: "`100px", y: "500px" })
const character6 = new Character("Michael_myers", "Images/Michael_myers.jpg", { x: "500px", y: "600px" })
const character7 = new Character("Samara", "Images/Samara.jpg", { x: "600px", y: "700px" })

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
