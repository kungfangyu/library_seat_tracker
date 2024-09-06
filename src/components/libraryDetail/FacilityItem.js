import {
  Box,
  Typography,
} from "@mui/material";

const FacilityItem = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src="/icons/icon_info.svg"
        alt="配置"
        style={{ marginRight: "8px" }}
      />
      <Typography
        variant="body"
        sx={{
          color: "text.third",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default FacilityItem;
