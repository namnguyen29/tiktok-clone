import styled from "@emotion/styled";
import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import logo from "assets/images/tiktok-logo.png";
import { FC } from "react";
import { fonts, zIndex } from "../../../AppTheme";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  position: sticky;
  z-index: ${zIndex.appBar};
`;

const HeaderLogo = styled.img`
  width: 118px;
  height: 42px;
  object-fit: contain;
`;

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Box
        className="header-content"
        sx={{
          maxWidth: "1150px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <HeaderLogo src={logo} alt="app-logo" />
        <Box className="right-menu">
          <Button
            startIcon={<Add />}
            sx={{ fontFamily: fonts.ibmPlexSansSemiBold, fontSize: "1rem" }}
            color="secondary"
            variant="outlined"
          >
            Tải lên
          </Button>
          <Button
            sx={{
              marginLeft: "1em",
              fontFamily: fonts.ibmPlexSansSemiBold,
              fontSize: "1rem",
            }}
            variant="contained"
          >
            Đăng nhập
          </Button>
        </Box>
      </Box>
    </HeaderWrapper>
  );
};
