/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 01:49:03
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 08:53:56
 * @FilePath: /library_seat_tracker/src/pages/LibraryList.js
 */
import { CssBaseline, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Header, Wrapper } from "../components/common/utility/LayoutStyle";
import LocationCard from "../components/libraryList/LocationCard";
import { libraryListData } from "../data/mockData";
import { theme } from "../style/theme";

const LibraryList = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header>
        <Typography color="white.main" variant="h3SemiBold">
          台北市立圖書館座位查詢
        </Typography>
      </Header>
      <Wrapper>
        {libraryListData.map((item) => (
          <LocationCard key={item.id} info={item} />
        ))}
      </Wrapper>
    </ThemeProvider>
  );
};

export default LibraryList;
