import { useState } from "react";

const images = [
  "https://img.freepik.com/free-photo/beautiful-tree-in-the-middle-of-a-field-covered-with-grass-with-the-tree-line-in-the-background_181624-29267.jpg?w=1380&t=st=1675158407~exp=1675159007~hmac=f410176a709c9fecff5304440ee1a4df88e9004582e38d06c138b82f7476c7f6",
  "https://img.freepik.com/free-photo/breathtaking-shot-of-beautiful-stones-under-turquoise-water-of-a-lake-and-hills-in-the-background_181624-12847.jpg?w=1380&t=st=1675158521~exp=1675159121~hmac=12120ee801ca1fa7affb04ed7b99d2db82094023e01c37644fbfb16265e41ea0",
  "https://img.freepik.com/free-photo/vestrahorn-mountains-in-stokksnes-iceland_335224-667.jpg?w=1380&t=st=1675158507~exp=1675159107~hmac=d741025cf969ae55284b1397fec1ee485d41d6a021c204264914818ceec81d0f",
  "https://img.freepik.com/free-photo/beautiful-sunset-in-the-mountains-landscape-with-sun-light-shining-through-orange-clouds-and-fog_146671-18476.jpg?w=1380&t=st=1675158506~exp=1675159106~hmac=60576d08ffd9e44b595dac95e360606e31d054a9a63159e3f5080392c18ab8be",
  "https://img.freepik.com/free-photo/beautiful-scenery-of-a-pathway-in-a-forest-with-trees-covered-with-frost_181624-42376.jpg?w=1380&t=st=1675158504~exp=1675159104~hmac=b7d87092713179c85dd767b912721476022817898ebfee88cb64b244df8d7396",
];

function Slider() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h1>Project 1: Image slider</h1>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>

        {images.map(
          (img, i) =>
            current === i && (
              <div key={img} className="slide">
                <img src={img} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}

function App() {
  return <Slider />;
}

export default App;
