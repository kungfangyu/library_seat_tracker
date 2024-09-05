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
  Link,
  Typography,
  Stack,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { AvatarChips } from "../components/common/utility/ChipsStyle";
import { Header, Wrapper } from "../components/common/utility/LayoutStyle";
import { theme } from "../style/theme";
import BaseCard from "../components/common/card/BaseCardStyle";
import FacilityItem from "../components/libraryDetail/FacilityItem";

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
        <Link
          component="a"
          variant="body"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            "臺北市信義區福德街86號"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.secondary",
            marginLeft: "8px",
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src="/icons/icon_location.svg"
            alt="位置"
            style={{ marginRight: "8px" }}
          />
          臺北市信義區福德街86號
        </Link>
        <Link
          component="a"
          variant="body"
          href={`tel:${encodeURIComponent("(02)22334578")}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.secondary",
            marginLeft: "8px",
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
            marginBottom: "12px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src="/icons/icon_phone.svg"
            alt="電話"
            style={{ marginRight: "8px" }}
          />
          (02)22334578
        </Link>
        <Divider />
        {/* 廣慈分館 --------------End */}

        {/* 樓層簡介--------------Start */}
        <Box mt={3}>
          <Typography variant="h3SemiBold">樓層簡介</Typography>
          <Box
            py={1.5}
            sx={{
              overflowX: "scroll",
              display: "flex",
              flexDirection: "row",
              gap: "12px",
            }}
          >
            <BaseCard
              sx={{
                marginTop: "0px",
                padding: "12px",
                minWidth: "fit-content",
              }}
            >
              <Typography variant="h3SemiBold" sx={{ color: "text.secondary" }}>
                一樓
              </Typography>
              <Stack mt={1}>
                <FacilityItem text="24小時自助還書機" />
              </Stack>
            </BaseCard>

            <BaseCard
              sx={{
                marginTop: "0px",
                padding: "12px",
                minWidth: "fit-content",
              }}
            >
              <Typography variant="h3SemiBold" sx={{ color: "text.secondary" }}>
                三樓
              </Typography>
              <Stack mt={1} spacing={1}>
                <FacilityItem text="自修室" />
                <FacilityItem text="筆記型電腦區" />
                <FacilityItem text="討論小間" />
              </Stack>
            </BaseCard>
            
            <BaseCard
              sx={{
                marginTop: "0px",
                padding: "12px",
                minWidth: "fit-content",
              }}
            >
              <Typography variant="h3SemiBold" sx={{ color: "text.secondary" }}>
                四樓
              </Typography>
              <Stack
                mt={1}
                spacing={2}
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Stack spacing={1} direction="column">
                  <FacilityItem text="綜合服務臺" />
                  <FacilityItem text="館藏特色區" />
                  <FacilityItem text="期刊報紙閱覽區" />
                  <FacilityItem text="參考資料區" />
                </Stack>
                <Stack spacing={1} direction="column">
                  <FacilityItem text="視聽資料區" />
                  <FacilityItem text="多功能活動室" />
                  <FacilityItem text="兒童閱覽室" />
                  <FacilityItem text="書庫區" />
                </Stack>
                <Stack spacing={1} direction="column">
                  <FacilityItem text=" 預約書自助取書區" />
                  <FacilityItem text="資訊檢索區" />
                  <FacilityItem text="WebPAC書目查詢區" />
                  <FacilityItem text="影印設備" />
                </Stack>
              </Stack>
            </BaseCard>
          </Box>
        </Box>
        {/* 樓層簡介--------------End */}

        <Box mt={3}>
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
