import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Header } from "layouts/components/Header";
import { FC, ReactNode } from "react";

export type HeaderOnlyProps = {
  children: ReactNode;
};

export const Main = styled.main``;


export const HeaderOnly: FC<HeaderOnlyProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main className="app-container">
        <Box className="app-content">{children}</Box>
      </Main>
    </>
  );
};
