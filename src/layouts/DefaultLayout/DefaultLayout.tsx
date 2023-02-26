import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Header } from "layouts/components/Header";
import { Sidebar } from "layouts/components/Sidebar";
import { FC, ReactNode } from "react";

export type DefaultLayoutProps = {
  children: ReactNode;
};

export const Main = styled.main``;

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main className="app-container">
        <Sidebar />
        <Box className="app-content">{children}</Box>
      </Main>
    </>
  );
};
