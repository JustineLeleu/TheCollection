class Game
{
    constructor(gameName, year, console, description, timeline, image)
    {
        this.gameName = gameName;
        this.year = year;
        this.console = console;
        this.description = description;
        //this.villain = villain;
        this.timeline = timeline;
        this.image = image;
    }
}

let game1 = new Game("Skyward Sword", 2011, "WII", "You can fly in the skies and have to save Zelda and Hyrule from Demise", "First before OOT", "assets/images/SkywardSword.jpg");
let game2 = new Game("Minish Cap", 2004, "Gameboy Advance", "You can turn into a Minish and have to save Zelda and Hyrule from Vaati", "Second before OOT", "assets/images/MinishCap.jpg");
//let game3 = new Game("Four Swords", 2003, "Gameboy Advance", "Dividing itself in four", "Vaati", "Third before OOT", "assets/images/Zelda.jpg");
let game4 = new Game("Ocarina Of Time", 1998, "N64", "You can travel in time and have to save Zelda and Hyrule from Ganondorf", "Fourth and divider of the timeline", "assets/images/OcarinaOfTime.jpg");
let game5 = new Game("A Link To The Past", 1991, "Super Nintendo", "You can travel between worlds and have to save Zelda and Hyrule from Ganon", "First in Defeat timeline", "assets/images/ALinkToThePast.jpg");
let game6 = new Game("Oracles", 2001, "GameBoy", "They are two different games connected that you can play in any order you like", "Second in Defeat timeline", "assets/images/Oracles.jpg");
let game7 = new Game("Link's Awakening", 1993, "GameBoy", "The entire adventure is a dream and you have to wake the wind fish to wake up", "Third in Defeat timeline", "assets/images/LinksAwakening.jpg");
let game8 = new Game("The Legend Of Zelda", 1986, "NES", "This is the first Zelda game and you had to save Hyrule from Ganon", "Fourth in Defeat timeline", "assets/images/Zelda1.jpg");
let game9 = new Game("The Adventure Of Link", 1987, "NES", "This is the second game with an action RPG style", "Fith in Defeat timeline", "assets/images/TheAdventureOfLink.jpg");
let game10 = new Game("Majora's Mask", 2000, "N64", "You can change form by wearing masks and have to save Termina from Majora and the falling moon", "First in Child Era Timeline", "assets/images/Majora.jpg");
let game11 = new Game("Twilight Princess", 2006, "GameCube", "You can turn into a wolf and go to another world to save Zelda and Hyrule from Ganondorf", "Second in Child Era Timeline", "assets/images/TwilightPrincess.jpg");
let game12 = new Game("Four Swords Adventure", 2004, "GameBoy Advance", "You can divide yourself in four to defeat Vaati", "Third in Child Era Timeline", "assets/images/FourSwordAdventure.jpg");
let game13 = new Game("The Wind Waker", 2002, "DS", "You can control the wind and have a boat to save your sister and Zelda and Hyrule from Ganondorf", "First in Adult Era Timeline", "assets/images/WindWaker.jpg");
let game14 = new Game("Phantom Hourglass", 2007, "DS", "You have a donjon central that is completed in multiple try thaks to the Phantom Hourglass", "Second in Adult Era Timeline", "assets/images/PhantomHourglass.jpg");
let game15 = new Game("Spirit Tracks", 2009, "DS", "You can travel with a train and your compagnion is the ghost of the princess Zelda", "Third in Adult Era Timeline", "assets/images/SpiritTracks.jpg");
let game16 = new Game("Breath Of The Wild", 2017, "Switch", "This is the first Zelda in an open world where you have to save Zelda and Hyrule from Ganon", "First in new timeline", "assets/images/BreathOfTheWild.jpg");
let game17 = new Game("Tears Of The Kingdom", 2023, "Switch", "This is the first direct sequel in the same world of another Zelda game (BOTW)", "Second in new timeline", "assets/images/TearsOfTheKingdom.jpg")

let zeldaGames = [game1, game2, /*game3,*/ game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15, game16, game17];