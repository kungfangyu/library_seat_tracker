/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 08:48:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-06 18:21:59
 * @FilePath: /library_seat_tracker/src/components/libraryList/LocationCard.js
 */

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
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
            borderRadius: "8px",
            overflow: "hidden",
            margin: "16px 16px 0",
          }}
        >
          <CardMedia
            sx={{
              width: "100%",
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
              mb: "4px",
            }}
          >
            <Typography gutterBottom variant="h3SemiBold" component="div">
              {name}
            </Typography>
            <BaseChips
              sx={{
                marginLeft: "8px",
                color: "success.main",
                fontWeight: "800",
              }}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FiberManualRecordIcon
                    fontSize="10px"
                    sx={{ marginRight: "4px" }}
                  />
                  尚有空位
                </Box>
              }
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
              textDecoration: "underline",
              display: "flex",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/icons/icon_location.svg"
              alt="位置"
              style={{ marginRight: "8px" }}
            />
            {address}
          </Link>
        </CardContent>
      </CardActionArea>
      <Divider orientation="horizontal" variant="middle" flexItem />
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
