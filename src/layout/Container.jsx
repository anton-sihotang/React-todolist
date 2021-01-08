/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";

const Container = ({
  children,
  flexdirection,
  flexwrap,
  justifyContent,
  alignItems,
  alignContent,
  height,
  minHeight
}) => {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexdirection};
    flex-wrap: ${flexwrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    height: ${height};
    min-height: ${minHeight};
  `;

  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  flexdirection: "row",
  flexwrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "flex-start",
  height: "auto",
  minHeight: "initial"
};

Container.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

  flexdirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),

  flexwrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),

  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-arround",
    "space-evenly",
    "start",
    "end",
    "left",
    "right"
  ]),

  alignItems: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "first baseline",
    "last baseline",
    "start",
    "end",
    "self-start",
    "self-end"
  ]),

  alignContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    "start",
    "end",
    "baseline",
    "first baseline",
    "last baseline"
  ]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.string
};

export default Container;
