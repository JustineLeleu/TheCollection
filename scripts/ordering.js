let selection = document.querySelector("#order");
let orderGames = [];

function compare( a, b ) 
{
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
}

function CheckContains(word)
{
    zeldaGames.forEach(element => 
    {
        if (element.timeline.includes(word))
        {
            orderGames.push(element);
        }
    });
}

function OnChange()
{
    orderGames = [];

    cards.forEach(element => 
    {
        element.remove();
    });

    switch (selection.value) {
        case "orderT":
            orderGames = zeldaGames;
            break;
        case "orderC":
            orderGames = Array.from(zeldaGames);
            orderGames.sort( compare );
            break;
        case "before":
            CheckContains("before OOT");
            break;
        case "defeat":
            CheckContains("Defeat");
            break;
        case "child":
            CheckContains("Child");
            break;
        case "adult":
            CheckContains("Adult");
            break;
    
        default:
            break;
    }

    orderGames.forEach(element => 
    {
        AddCard(element);
    });
}