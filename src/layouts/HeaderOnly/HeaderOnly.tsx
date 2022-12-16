import { Box } from "@mui/material";
import { Header } from "layouts/components/Header";
import { FC, ReactNode } from "react";

export type HeaderOnlyProps = {
  children: ReactNode;
};

export const HeaderOnly: FC<HeaderOnlyProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box className="app-container">
        <Box className="app-content">{children}</Box>
      </Box>
    </>
  );
};
