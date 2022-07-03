import { Grid } from "@mui/material";
import React from "react";
import Header from "../header/Header.component";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Grid>
        <Header />
      </Grid>
      {children}
      <Grid>

      </Grid>
    </>
  );
};

export default Layout;
