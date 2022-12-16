import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { fonts } from "../../AppTheme";

export const Home: FC = () => {
  return (
    <Box>
      <Button
        sx={{
          fontFamily: fonts.ibmPlexSansBold,
          textTransform: "none",
        }}
        variant="outlined"
      >
        Dang nhap
      </Button>
      <Typography
        sx={{
          textTransform: "capitalize",
        }}
      >
        Hello Guy
      </Typography>
      <p>Test please </p>
    </Box>
  );
};
