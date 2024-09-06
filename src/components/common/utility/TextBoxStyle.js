/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 06:59:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-06 18:20:47
 * @FilePath: /library_seat_tracker/src/components/common/utility/TextBoxStyle.js
 */
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const TextBox = styled(Box)(() => {
  return {
    borderRadius: "4px",
    padding: "8px",
    width: "100%",
    height: "80px",
  };
});

export default TextBox;
