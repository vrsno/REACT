import { useEffect, useState } from "react";
import { getImages } from "../helpers/getImages";
import confetti from "canvas-confetti";

let size = 3;
let clicks = 0;
export default function Card({ start, score }) {
  const [images, setImages] = useState(getImages(size));
  const [selected, setSelected] = useState([]);
  const [opened, setOpened] = useState([]);

  //console.log(selected);
  //console.log(opened);

  const handleClick = (item) => {
    if (start) {
      clicks = clicks + 1;
      if (selected.length < 2) {
        setSelected((selected) => selected.concat(item));
      }
    }
  };

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setOpened((opened) => opened.concat(selected));
      }
      setTimeout(() => {
        setSelected([]);
      }, 500);
    }
  }, [selected]);

  const clearArrays = () => {
    setSelected([]);
    setOpened([]);
  };

  const calculateScore = () => {
    let passLevel = size * 10;
    let total = score.current;
    const cards = size * 2;
    if (clicks === cards) {
      total = total + cards * 2 + passLevel;
    } else if (clicks > cards && clicks < cards + 5) {
      total = total + cards + passLevel;
    } else if (clicks > cards + 5 && clicks < cards + 10) {
      total = total + cards / 2 + passLevel;
    } else {
      total = total + Math.round(cards / 3) + passLevel;
    }
    clicks = 0;
    score.current = total;
  };
  useEffect(() => {
    if (opened.length === images.length) {
      calculateScore();
      size = size + 2;
      clearArrays();
      setImages(getImages(size));

      confetti({
        particleCount: 200,
        startVelocity: 30,
        spread: 300,
        gravity: 1.5,
        origin: { y: 0 },
      });
    }
  }, [opened]);

  return (
    <div className="cards">
      <h2>score: {score.current}</h2>
      <ul>
        {images.map((item, index) => (
          <li key={index} onClick={() => handleClick(item)}>
            <div className="content">
              <div
                className={`front ${
                  selected.includes(item) || opened.includes(item)
                    ? "flip-front"
                    : ""
                }`}
              >
                <img src="/question.png" alt="icon" />
              </div>
              <div
                className={`back ${
                  selected.includes(item) || opened.includes(item)
                    ? "flip-back"
                    : ""
                }`}
              >
                <img
                  src={
                    selected.includes(item)
                      ? item.split("|")[1]
                      : "/question.png"
                  }
                  alt="icon"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
