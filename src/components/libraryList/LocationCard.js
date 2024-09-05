/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 08:48:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 08:53:33
 * @FilePath: /library_seat_tracker/src/components/libraryList/LocationCard.js
 */

import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import BaseCard from "../common/card/BaseCardStyle";
import BaseChips from "../common/utility/ChipsStyle";

const LocationCard = ({ info }) => {
  const { name, image, address, vacancy } = info;
  return (
    <BaseCard>
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
            image={image}
            alt={name}
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
              {name}
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
              {address}
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
            空位率: {vacancy}
          </Typography>
          <img src="/icons/icon_expand.svg" alt="seat" />
        </Button>
      </CardActions>
    </BaseCard>
  );
};

export default LocationCard;
