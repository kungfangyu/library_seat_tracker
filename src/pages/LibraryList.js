/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 01:49:03
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 08:22:19
 * @FilePath: /library_seat_tracker/src/pages/LibraryList.js
 */
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Divider,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import BaseCard from "../components/common/card/BaseCardStyle";
import BaseChips from "../components/common/utility/ChipsStyle";
import Wrapper from "../components/common/utility/WrapperStyle";
import { libraryListData } from "../data/mockData";
import { theme } from "../style/theme";

const LibraryList = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          padding: "16px",
          backgroundColor: "primary.main",
          textAlign: "center",
        }}
      >
        <Typography color="white.main" variant="h3SemiBold">
          台北市立圖書館座位查詢
        </Typography>
      </Box>
      <Wrapper>
        {libraryListData.map((item) => (
          <BaseCard key={item.id}>
            <CardActionArea>
              <Box
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  margin: "16px 16px 0",
                }}
              >
                <CardMedia
                  sx={{
                    height: 88,
                  }}
                  component="img"
                  image={item.image}
                  alt={item.name}
                />
              </Box>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography gutterBottom variant="h3SemiBold" component="div">
                    {item.name}
                  </Typography>
                  <BaseChips
                    sx={{ marginLeft: "8px", color: "success.main" }}
                    label="•尚有空位"
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src="/icons/icon_location_search_24.svg" alt="seat" />
                  <Typography
                    variant="body"
                    sx={{
                      color: "text.secondary",
                      marginLeft: "8px",
                      textDecoration: "underline",
                    }}
                  >
                    {item.address}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions>
              <Button
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                size="small"
                color="primary"
              >
                <Typography variant="body2" sx={{ color: "text.third" }}>
                  空位率: {item.vacancy}
                </Typography>
                <img src="/icons/icon_expand.svg" alt="seat" />
              </Button>
            </CardActions>
          </BaseCard>
        ))}
      </Wrapper>
    </ThemeProvider>
  );
};

export default LibraryList;
