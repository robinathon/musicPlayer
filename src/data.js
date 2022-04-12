import { v4 as uuidv4 } from "uuid";

function ChillHop() {
  return [
    {
      name: "Jaan Nisaar",
      artist: "Arijit Singh",
      cover:
        "https://i0.wp.com/www.lyricsupgrade.com/wp-content/uploads/2020/07/Jaan-Nisaar-Lyrics-Arijit-Singh.jpg?w=480&ssl=1",
      id: uuidv4(),
      active: true,
      color: ["#642F27", "#9CB4CE"],
      audio:"https://uploadbox.io/b13o3b3238b7
",
    },

    {
      name: "Hall Of Fame",
      artist: "The Script ft. will.i.am",
      cover:
        "https://images.rapgenius.com/6808b60b427c626b41455ff375bb8b98.600x600x1.jpg",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio:"https://uploadbox.io/sgik5ey8wba4"
    },

    {
      name: "Aaja We Mahiya",
      artist: "Imran Khan",
      cover:
        "https://c.saavncdn.com/471/Unforgettable-English-2009-500x500.jpg",
      id: uuidv4(),
      active: false,
      color: ["#146787", "#A56235"],
      audio:"https://uploadbox.io/6a3v8zt78i36"
    },

    {
      name: "Peaches",
      artist: "Justin Bieber ft.Daniel Caesar",
      cover:
        "https://i.pinimg.com/originals/a2/36/d5/a236d5ab852d9e36351ca73f37ed9341.jpg",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio:"https://uploadbox.io/bjg127m7cmlq"
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
