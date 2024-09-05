/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 08:55:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 19:06:50
 * @FilePath: /library_seat_tracker/src/pages/LibraryDetail.js
 */
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { AvatarChips } from "../components/common/utility/ChipsStyle";
import { Header, Wrapper } from "../components/common/utility/LayoutStyle";
import { theme } from "../style/theme";

const LibraryDetail = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <IconButton
            size="small"
            onClick={() => navigate("/libraryList")}
            sx={{ position: "absolute", left: 0, zIndex: 1 }}
          >
            <ArrowBackIosNewRoundedIcon color="white" />
          </IconButton>
          <Typography
            color="white.main"
            variant="h3SemiBold"
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            台北市立圖書館座位查詢
          </Typography>
        </Box>
      </Header>
      <Wrapper>
        {/* 廣慈分館 --------------Start */}
        <Box my={2}>
          <Typography variant="h2SemiBold">廣慈分館</Typography>
        </Box>
        <Divider />
        {/* 廣慈分館 --------------End */}
        {/* 樓層簡介--------------Start */}
        <Box my={4}>
          <Typography variant="h3SemiBold">樓層簡介</Typography>
        </Box>
        {/* 樓層簡介--------------End */}

        <Box my={4}>
          <Typography variant="h3SemiBold">座位區配置</Typography>
          <Box display="flex" gap={1} my={2}>
            <AvatarChips
              active={true}
              avatar={
                <Avatar
                  sx={{
                    color: theme.palette.white.main,
                    background: theme.palette.primary.main,
                  }}
                  alt="3F"
                >
                  3F
                </Avatar>
              }
              label="自修室"
              variant="outlined"
            />
            <AvatarChips
              avatar={
                <Avatar
                  sx={{
                    color: theme.palette.white.main,
                    background: theme.palette.primary.main,
                  }}
                  alt="3F"
                >
                  3F
                </Avatar>
              }
              label="筆電區"
              variant="outlined"
            />
          </Box>
        </Box>
      </Wrapper>
    </ThemeProvider>
  );
};

export default LibraryDetail;
