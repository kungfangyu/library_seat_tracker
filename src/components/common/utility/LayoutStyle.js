/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 07:15:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 10:49:02
 * @FilePath: /library_seat_tracker/src/components/common/utility/LayoutStyle.js
 */
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../../../style/theme";

export const Wrapper = styled(Box)(() => {
  return {
    padding: "1px 16px 16px",
    backgroundColor: theme.palette.grey.light,
    minHeight: "100vh",
  };
});

export const Header = styled(Box)(() => {
  return {
    padding: "16px",
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
  };
});
