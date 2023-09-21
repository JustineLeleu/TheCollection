function AddElement(type, text)
{
    let newElement = document.createElement(type);
    let newContent = document.createTextNode(text);
    newElement.appendChild(newContent);
    return newElement;
}

function AddCard(element)
{
    let newCard = document.createElement("div");
    main.appendChild(newCard);
    newCard.classList.add("grid", "bg-emerald-900", "my-0.5", 'rounded', "pb-2", "text-white");

    let newImage = AddElement("img")
    newCard.appendChild(newImage);
    newImage.setAttribute("src", element.image);
    newImage.classList.add("object-cover", "h-40", "w-full");

    let newTitle = AddElement("h2", element.gameName);
    newTitle.classList.add("px-2", "text-xl", "font-triforce");

    let infos = "Release in " + element.year + " on " + element.console;
    let newInfoPara = AddElement("p", infos);
    newInfoPara.classList.add("px-2", "text-sm", "pb-3", "font-rockNRoll");

    let newDescriptionPara = AddElement("p", element.description);
    newDescriptionPara.classList.add("px-2", "text-base", "text-center", "pb-3", "font-rockNRoll");

    let timeline = "This game is placed: " + element.timeline;
    let newTimelinePara = AddElement("p", timeline);
    newTimelinePara.classList.add("px-2", "text-sm", "font-rockNRoll");

    newCard.appendChild(newTitle);
    newCard.appendChild(newInfoPara);
    newCard.appendChild(newDescriptionPara);
    newCard.appendChild(newTimelinePara);

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    newCard.appendChild(checkbox);
    checkbox.classList.add("absolute", "hidden");
    checkboxes.push(checkbox);

    cards.push(newCard);
}