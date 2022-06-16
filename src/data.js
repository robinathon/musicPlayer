import { v4 as uuidv4 } from "uuid";

function ChillHop() {
  return [
    
    {
      name: "Blessed",
      artist: "moods, Yasper",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32860",
    },
    
    {
      name: "Summer in Cotuit",
      artist: "Teddy Roxpin",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/87fc7eed9ec0459ce68555bde53e65b02be5acf5-1024x1024.png",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35355",
    },
    
    {
      name: "Indian Summer Rally",
      artist: "oddfish, cocabona",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/03/c03fa64d8da9f1aa67db2a6b0c20cce262e9a976-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#642F27", "#9CB4CE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32863",
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
