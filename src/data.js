import { v4 as uuidv4 } from "uuid";

function ChillHop() {
  return [
    {
      name: "Jaan Nisaar",
      artist: "Arijit Singh",
      cover:
        "https://a10.gaanacdn.com/gn_img/albums/g4w3vr3jJB/4w3vZx683j/size_l_1543307373.webp",
      id: uuidv4(),
      active: true,
      color: ["#642F27", "#9CB4CE"],
      audio:"https://www.mboxdrive.com/X2Download.com%20-%20Jaan%20Nisaar%20-%20Lyrical%20-%20Kedarnath-%20Arijit%20Singh%20-%20Sushant%20Singh%20Rajput%20-%20Sara%20Ali%20Khan-%20Amit%20Trivedi%20(128%20kbps).mp3",
    },

    {
      name: "Hall Of Fame",
      artist: "The Script ft. will.i.am",
      cover:
        "https://images.rapgenius.com/6808b60b427c626b41455ff375bb8b98.600x600x1.jpg",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio:"https://www.mboxdrive.com/Hall%20of%20Fame%20-%20The%20Script.mp3"
    },

    {
      name: "Aaja We Mahiya",
      artist: "Imran Khan",
      cover:
        "https://c.saavncdn.com/471/Unforgettable-English-2009-500x500.jpg",
      id: uuidv4(),
      active: false,
      color: ["#146787", "#A56235"],
      audio:"https://www.mboxdrive.com/Aaja-We-Mahiya(PaglaSongs).mp3"
    },

    {
      name: "Peaches",
      artist: "Justin Bieber ft.Daniel Caesar",
      cover:
        "https://i.pinimg.com/originals/a2/36/d5/a236d5ab852d9e36351ca73f37ed9341.jpg",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio:"https://www.mboxdrive.com/Peaches(PagalWorld.com.se).mp3"
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
