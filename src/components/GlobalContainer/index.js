import { Container, Drawer } from "@material-ui/core";
import React, { useState, Fragment } from "react"
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useStyles } from "./styles";

export const GlobalContainer = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => setShowDrawer(state => !state)
  
  return (
    <Fragment>
      {}
      {}
      <Header />
      <Sidebar />
      <Container style={{ paddingTop: 80 }}>
        {children}
      </Container>
    </Fragment>
  )
}