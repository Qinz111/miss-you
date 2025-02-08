import { useEffect, useState } from "react";
import "./App.css";
import mt from "./assets/mt.gif";
import mq from "./assets/hug.gif";
import kiss from "./assets/kiss.gif";

const App = () => {
  const [check, setCheck] = useState(false);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    if (!check) return;

    const interval = setInterval(() => {
      setBoxes((prevBoxes) => [
        ...prevBoxes,
        {
          id: prevBoxes.length + 1,
          x: Math.max(10, Math.random() * (window.innerWidth - 200)),
          y: Math.max(10, Math.random() * (window.innerHeight - 150)),
        },
      ]);
    }, 150);

    return () => clearInterval(interval);
  }, [check]);

  const handleYes = () => {
    return setCheck(true);
  };

  return (
    <div className="App">
      <div className="content">
        <p>Bae do you miss me?</p>

        <div>
          {check ? <img src={kiss} alt="cute" /> : <img src={mt} alt="cute" />}
        </div>

        <div className="btn-click">
          <button className="btn-yes" id="yesButton" onClick={handleYes}>
            Yes
          </button>
          <button
            className="btn-no"
            id="noButton"
            onMouseOver={moveButton}
            onClick={moveButton}
          >
            No
          </button>
        </div>
      </div>
      {check &&
        boxes.map((box) => (
          <div
            key={box.id}
            className="container-yes"
            style={{
              position: "absolute",
              left: box.x,
              top: box.y,
            }}
          >
            <div className="content-yes">
              <img src={mq} alt="" className="gif" />
              MISS YOU TOO
            </div>
          </div>
        ))}
    </div>
  );
};

const moveButton = () => {
  var button = document.getElementById("noButton");
  if (!button) return;

  var buttonWidth = button.offsetWidth;
  var buttonHeight = button.offsetHeight;

  var maxX = window.innerWidth - buttonWidth - 20;
  var maxY = window.innerHeight - buttonHeight - 20;

  // Đảm bảo button không tràn khỏi màn hình
  var x = Math.min(Math.max(10, Math.random() * maxX), maxX);
  var y = Math.min(Math.max(10, Math.random() * maxY), maxY);

  // Thay đổi left và top thay vì dùng transform
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
};

export default App;
