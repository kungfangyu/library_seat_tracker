/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 08:48:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 18:40:15
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
  Link,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BaseCard from "../common/card/BaseCardStyle";
import { BaseChips } from "../common/utility/ChipsStyle";

const LocationCard = ({ info }) => {
  const { id, name, image, address, vacancy } = info;
  const navigate = useNavigate();

  return (
    <BaseCard>
      <CardActionArea onClick={() => navigate(`/librarydetail/${id}`)}>
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
          <Link
            component="a"
            variant="body"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "text.secondary",
              marginLeft: "8px",
              textDecoration: "underline",
              display: "flex",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/icons/icon_location_search_24.svg"
              alt="位置"
              style={{ marginRight: "8px" }}
            />
            {address}
          </Link>
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
