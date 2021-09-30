import { Container } from "@material-ui/core";
import React, { Fragment } from "react"
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { usePageContext } from "../../context/pageContext";
import { defaultTheme } from "../../theme";

export const GlobalContainer = ({ children }) => {
  const { drawerOpen } = usePageContext();
  const width = drawerOpen ?
    `calc(100% - ${defaultTheme.width.sidebarOpen})` 
    : `calc(100% - ${defaultTheme.width.sidebarClosed})`;
  
  return (
    <Fragment>
      <Sidebar />
      <Header />
      <Container style={{ paddingTop: 80, marginRight: 0, width: width}}>
        {children}
      </Container>
    </Fragment>
)};