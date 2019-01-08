import React from "react";

const imgWithClick = { cursor: "pointer" };

export const GalleryImage = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left
}) => {
  const imgStyle = { margin };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
    <img
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
      alt="img"
    />
  );
};
