/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 07:59:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 08:21:06
 * @FilePath: /library_seat_tracker/src/components/common/utility/ChipsStyle.js
 */
import { Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../../../style/theme"; // 导入自定义主题

const BaseChips = styled(Chip)(() => {
  return {
    minWidth: "78px",
    padding: "2px 4px",
    height: "25px",
    backgroundColor: theme.palette.grey.main,
    fontSize: theme.typography.body.fontSize,
    borderRadius: "6px",
  };
});

export default BaseChips;
