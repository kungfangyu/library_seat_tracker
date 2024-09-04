/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-04 14:22:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 01:36:31
 * @FilePath: /library_seat_tracker/src/style/theme.js
 */
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5AB4C5",
      light: "#EDF8FA",
      dark: "#468D9B",
    },
    secondary: {
      light: "#FDF8ED",
      main: "#F5BA4B",
      dark: "#E7A43C",
    },
    grey: {
      light: "#F1F3F4", //page-background-color
      main: "#E3E7E9", //btn-background-color
      dark: "#738995", //card-background-color
    },
    text: {
      primary: "#30383D",
      secondary: "#475259",
      third: "#91A0A8",
    },
    gradient: {
      main: "linear-gradient(315deg, rgba(68, 182, 199, 0.702) 0%, #44B6C7 100%)",
    },
    success: "#76A732",
    error: "#D45251",
    warning: "#FD853A",
  },
});
