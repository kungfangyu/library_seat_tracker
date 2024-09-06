/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 06:59:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 07:26:29
 * @FilePath: /library_seat_tracker/src/components/common/card/BaseCardStyle.js
 */
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const BaseCard = styled(Card)(() => {
  return {
    maxWidth: "100%",
    borderRadius: "16px",
    marginTop: "16px",
    boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.04)",
  }
});

export default BaseCard;
