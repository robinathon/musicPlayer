import { v4 as uuidv4 } from "uuid";

function ChillHop() {
  return [
    {
      name: "The Next EpisodeUl",
      artist: "Snoop Dogg, Dr. Dre",
      cover:
        "https://images.genius.com/7d7c1a4a2f10c54b35605ee8046f503c.1000x1000x1.jpg",
      id: uuidv4(),
      active: true,
      color: ["#642F27", "#9CB4CE"],
      audio:
        "https://www.mboxdrive.com/Dr.%20Dre,%20Ft%20Snoop%20Dogg-The%20Next%20Episode%20(lyrics).mp3",
    },

    {
      name: "Hall Of Fame",
      artist: "The Script ft. will.i.am",
      cover:
        "https://images.rapgenius.com/6808b60b427c626b41455ff375bb8b98.600x600x1.jpg",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio:
        "https://www.mboxdrive.com/The%20Script%20-%20Hall%20Of%20Fame%20(Lyrics).mp3",
    },

    {
      name: "Aaja We Mahiya",
      artist: "Imran Khan",
      cover:
        "https://c.saavncdn.com/471/Unforgettable-English-2009-500x500.jpg",
      id: uuidv4(),
      active: false,
      color: ["#146787", "#A56235"],
      audio:
        "https://www.mboxdrive.com/Aaja%20We%20Mahiya%20(Imran%20Khan).mp3",
    },

    {
      name: "Peaches",
      artist: "Justin Bieber ft.Daniel Caesar",
      cover:
        "https://i.pinimg.com/originals/a2/36/d5/a236d5ab852d9e36351ca73f37ed9341.jpg",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio:
        "https://www.mboxdrive.com/Justin%20Bieber%20-%20Peaches%20ft.%20Daniel%20Caesar,%20Giveon.mp3",
    },

    {
      name: "Peaky Blinders",
      artist: "Otnicka",
      cover:
        "https://preview.redd.it/lx9mgljetm881.png?width=640&crop=smart&auto=webp&s=33d823c66688bc3a254ac1efa1f5f1486745d6d4",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio: "https://www.mboxdrive.com/Otnicka%20-%20PEAKY%20BLINDERS.mp3",
    },

    {
      name: "la zona",
      artist: "Maydee",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27455",
    },
  ];
}

export default ChillHop;
