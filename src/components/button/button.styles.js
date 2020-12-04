import { css } from "@emotion/react";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#4848448";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
  }

  return css`
    font-size: 1.8rem;
    font-family: "bungee", sans-serif;
    color: ${textColor};
    text-align: ${align};

    width: 24%;
    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
  `;
};
