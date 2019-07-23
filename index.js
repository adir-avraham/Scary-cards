const mainBoard = document.querySelector("#main");
const character1 = new Character("num", "Images/the_nun.jpg", { x: "", y: "" })
const character2 = new Character("jason", "Images/jason.jpg", { x: "", y: "" })
const character3 = new Character("fredy", "Images/freddy_krueger.jpg", { x: "", y: "" })
const character4 = new Character("annabelle", "Images/annabelle.jpg", { x: "", y: "" })
const character5 = new Character("Chucky", "Images/Chucky.jpg", { x: "", y: "" })
const character6 = new Character("Michael_myers", "Images/Michael_myers.jpg", { x: "", y: "" })
const character7 = new Character("Samara", "Images/Samara.jpg", { x: "", y: "" })

const characters = [];

characters.push(character1, character2, character3, character4, character5, character6, character7);


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

document.querySelector("#setPosition").addEventListener("click", setPosition);


function drawHandler() {
    draw(characters);
}


function setPosition (){
    character1.setPos();
    character2.setPos();
    character3.setPos();
    character4.setPos();
    character5.setPos();
    character6.setPos();
    character7.setPos();
    draw(characters);
}




  function moveRight() {
      for (let index = 0 ; index < characters.length; index++) {
          characters[index].setXpos(20);
          draw(characters);
      }

   
  }

//   function moveRight() {
//     character1.setXpos(20);
//     character2.setXpos(20);
//     character3.setXpos(20);
//     character4.setXpos(20);
//     character5.setXpos(20);
//     character6.setXpos(20);
//     character7.setXpos(20);  
//     draw(characters);
//   }


  function moveLeft() {
    character1.setXpos(-20);
    character2.setXpos(-20);
    character3.setXpos(-20);
    character4.setXpos(-20);
    character5.setXpos(-20);
    character6.setXpos(-20);
    character7.setXpos(-20);  
    draw(characters);
  }

  function moveUp() {
    character1.setYpos(-20);
    character2.setYpos(-20);
    character3.setYpos(-20);
    character4.setYpos(-20);
    character5.setYpos(-20);
    character6.setYpos(-20);
    character7.setYpos(-20);  
    draw(characters);
  }

  function moveDown() {
    character1.setYpos(20);
    character2.setYpos(20);
    character3.setYpos(20);
    character4.setYpos(20);
    character5.setYpos(20);
    character6.setYpos(20);
    character7.setYpos(20);  
    draw(characters);
  }



// function moveRight() {
//     characters.forEach(function (character) {
//        character.setXpos(20)
//        draw(monsters);
//     });



//     monster1.setXpos(20);
//     draw(monsters);
//   }
  
//   function moveLeft() {
//     monster1.setXpos(-20);
//     draw(monsters);
//   }