const deleteButton = document.getElementById("deleteButon");
let clicked = false;
let checkboxes = [];
let emptyCard;
let form;

function createFormElement(label, id)
{
    let elLabel = AddElement("label", label);
    elLabel.setAttribute("for", id);
    let element = document.createElement("input");
    element.setAttribute("type", "text");
    element.setAttribute("name", id);
    element.setAttribute("id", id);
    element.setAttribute("required", "true");
    element.classList.add("px-2", "text-xl", "font-triforce");

    form.appendChild(elLabel);
    form.appendChild(element);
}

function addEmptyCard()
{
    emptyCard = document.createElement("div");
    main.appendChild(emptyCard);
    emptyCard.classList.add("grid", "bg-emerald-900", "my-0.5", "rounded", "pb-2");

    let newImage = AddElement("img")
    emptyCard.appendChild(newImage);
    newImage.setAttribute("src", "assets/images/Zelda.jpg");
    newImage.classList.add("object-cover", "h-40", "w-full");

    form = document.createElement("form");
    emptyCard.appendChild(form);
    form.setAttribute("name", "cardForm");
    form.setAttribute("onsubmit", "return submitCard()");
    form.classList.add("grid", "grid-cols-2", "gap-5");

    createFormElement("Title", "cardTitle");
    createFormElement("Year", "cardYear");
    createFormElement("Console", "cardConsole");
    createFormElement("Description", "cardDescription");
    createFormElement("Timeline", "cardTimeline");

    let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.classList.add("bg-slate-300", "p-2", "rounded-md", "w-fit");
    form.appendChild(submit);
}

function submitCard()
{
    let title = document.forms["cardForm"]["cardTitle"].value;
    let Year = document.forms["cardForm"]["cardYear"].value;
    let Console = document.forms["cardForm"]["cardConsole"].value;
    let Description = document.forms["cardForm"]["cardDescription"].value;
    let Timeline = document.forms["cardForm"]["cardTimeline"].value;

    let newGame = new Game(title, Year, Console, Description, Timeline);
    AddCard(newGame);
}

function deleteCard()
{
    checkboxes.forEach(element => {
        if (element.checked)
        {
            element.parentNode.remove();
        }
    });
}

function modifyCards()
{
    if (!clicked)
    {
        main.classList.add("bg-slate-300");
        //addEmptyCard();

        checkboxes.forEach(element => {
            element.classList.remove("hidden");
            element.classList.add("visible");
        });

        deleteButton.classList.remove("hidden");
        deleteButton.classList.add("visible");

        clicked = true;
    }
    else
    {
        main.classList.remove("bg-slate-300");

        checkboxes.forEach(element => {
            element.classList.remove("visible");
            element.classList.add("hidden");
        });

        deleteButton.classList.remove("visible");
        deleteButton.classList.add("hidden");

        clicked = false;
    }
}