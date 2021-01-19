/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import Button from "../button/ButtonNoJSX";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return jsx(
    "section",
    {
      className: "header-component"
    },
    jsx(
      Container,
      {
      alignItems: "flex-start"
    },
    jsx( //Item pertama
      Item,
      {
        flex:1
      },
      jsx(
        Button,
        {
          text=showAdd ? "Finish" : "Add",
          onclick:showAddToggle
        }
      )
    ),
    jsx(//Item ke dua
      Item,
      {
        flex:2,
      },
      jsx(
        "h1",
        {
          css:styles.headerTitle(theme)
        },
        "Todo Lists"
      )
    ),
    jsx(// Item ke tiga
      Button,
      {
        text:"clear",
        onClick:clearTodos,
        color:"red",
        align:"right"
      }
    )
  )
)
}

Header.prototype = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;