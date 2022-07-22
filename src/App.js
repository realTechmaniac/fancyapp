import React from "react";
import SideMenu from "./component/UI/SideMenu/SideMenu";
import Header from "./component/UI/Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
    overflowX: "hidden",
  },
});

function App() {
  const classes = useStyles();
  const { appMain } = classes;
  return (
    <>
      <SideMenu />
      <div className={appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
