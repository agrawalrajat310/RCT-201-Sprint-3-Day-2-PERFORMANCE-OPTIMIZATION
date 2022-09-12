import React, { useState } from "react";

function PlayPause() {
  const [play, setPlay] = useState("paused");

  return (
    <div>
      <h1>The State is {play}</h1>
      <button
        onClick={() =>
          play === "paused" ? setPlay("playing") : setPlay("paused")
        }
      >
        {play}
      </button>
    </div>
  );
}
export default PlayPause;
