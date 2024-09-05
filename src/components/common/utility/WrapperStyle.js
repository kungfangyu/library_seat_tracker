/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 07:15:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 07:25:57
 * @FilePath: /library_seat_tracker/src/components/common/utility/WrapperStyle.js
 */
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../../../style/theme"; // 导入自定义主题

const Wrapper = styled(Box)(() => {
  return {
    padding: "1px 16px 16px",
    backgroundColor: theme.palette.grey.light,
    minHeight: "100vh",
  };
});

export default Wrapper;
