import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    width: 320,
    height: "100%",
    backgroundColor: "#253053",
  },
});

const SideMenu = () => {
  const classes = useStyles();
  const { sideMenu } = classes;

  return (
    <div className={sideMenu}>
      SideMenu
      <div>Basic Content</div>
    </div>
  );
};

export default SideMenu;
