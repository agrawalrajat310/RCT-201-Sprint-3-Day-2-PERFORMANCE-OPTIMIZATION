// Write Code here
import React from "react";

function Image(props) {
  const { title, src, alt, width, height } = props;

  // console.log(title, src, alt, width, height)
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title} </h2>
      <img src={src} alt={alt} height={height} width={width} />
    </div>
  );
}
export default Image;
