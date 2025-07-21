import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    const paragraph = document.getElementById("pText");
    if (count > 0) {
      setCount(count - 1);
    } else {
      paragraph.textContent = "Count can't go below 0";
    }
  };

  const reset = () => {
    const paragraph = document.getElementById("pText");
    setCount(0);
    paragraph.textContent = "";
  };

  const pText = {
    textAlign: "center",
    color: "red",
    fontSize: "14px",
    fontWeight: "400",
  };

  useEffect(() => {
    const paragraph = document.getElementById("pText");
    if (count === 10) {
      paragraph.textContent = "Limit Reached!";
    } else if (count > 0 && count < 10) {
      paragraph.textContent = "";
    }
  }, [count]);

  return (
    <>
      <div className="container">
        <h1> {count} </h1>
        <p id="pText" style={pText}></p>
        <div className="button">
          <button onClick={decrease}>-</button>
          <button
            onClick={() => {
              if (count < 10) {
                setCount(count + 1);
              }
            }}
          >
            +
          </button>
        </div>

        <div className="resetButton">
          <button onClick={reset} className="reset">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
export default Counter;
