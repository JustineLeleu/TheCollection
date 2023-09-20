const body = document.body; 
const section = document.createElement("section");
body.appendChild(section);

function AddCard()
{
    let newCard = document.createElement("div");
    section.appendChild(newCard);
    console.log(newCard);
}

zeldaGames.forEach(element => 
{
    AddCard();
});