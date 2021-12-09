import "./styles.css";
import React, { useState } from "react";

var Thriller = [
  {
    name: "Money Heist",
    rating: "Rating: 5/5",
    descr: "Must Watch"
  },
  {
    name: "JL50",
    rating: "Rating: 4/5",
    descr: "A plane is discovered to have recently crashed in West Bengal."
  },
  {
    name: "Lucifer",
    rating: "Rating: 4/5",
    descr:
      "Lucifer: Tom Ellis' fantasy web series declared as the most-streamed show of 2019"
  }
];
var Romance = [
  {
    name: "Mismatched",
    rating: "Rating: 4/5",
    descr:
      "Mismatched is a Netflix romantic web series based on Sandhya Menon’s 2017 novel"
  },
  {
    name: "Taj Mahal 1989",
    rating: "Rating: 5/5",
    descr:
      "Three intertwined love stories make up this desi romantic web series in Hindi."
  },
  {
    name: "Little Things",
    rating: "Rating: 3.5/5",
    descr:
      "Little Things was not a Netflix original, although it was eventually purchased by the streaming site."
  }
];
var Action = [
  {
    name: " Hawkeye",
    rating: "Rating: 4/5",
    descr:
      "Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger,"
  },
  {
    name: "The Wheel of Time ",
    rating: "Rating: 3/5",
    descr:
      "Set in a high fantasy world where magic exists, but only some can access it,"
  },
  {
    name: " Arcane",
    rating: "Rating: 3.5/5",
    descr: "Set in utopian Piltover and the oppressed underground of Zaun"
  }
];

export default function App() {
  var [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="App">
      <section>
        <h1 style={{ fontSize: "30px" }}>🎦webseries</h1>
        <p style={{ fontSize: "small" }}>category wise webseries</p>
        <hr></hr>
      </section>
      <button onClick={() => setActiveIndex(0)}>Thriller</button>
      <button onClick={() => setActiveIndex(1)}>Romance</button>
      <button onClick={() => setActiveIndex(2)}>Action</button>
      <div className="listed">
        <ul>
          <li>
            {activeIndex === 0 &&
              Thriller.map((item) => (
                <li>
                  <p id="brand">{item.name}</p>
                  <p>{item.rating}</p>
                  <p>{item.descr}</p>
                </li>
              ))}
          </li>
          <li>
            {activeIndex === 1 &&
              Romance.map((item) => (
                <li>
                  <p id="brand">{item.name}</p>
                  <p>{item.rating}</p>
                  <p>{item.descr}</p>
                </li>
              ))}
          </li>
          <li>
            {activeIndex === 2 &&
              Action.map((item) => (
                <li>
                  <p id="brand">{item.name}</p>
                  <p>{item.rating}</p>
                  <p>{item.descr}</p>
                </li>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
