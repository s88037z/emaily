import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary[600],
    "& button": {
      textTransform: "none"
    }
  },
  toolbar: {
    justifyContent: "space-between"
  },
  title: {
    color: "inherit",
    textDecoration: "none",
    fontSize: 24
  }
}));
export default function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <a className={classes.title} href="/">
            Emaily
          </a>
          {/* <Typography className={classes.title} variant="h6" href="/">
            Emaily
          </Typography> */}

          <Button color="inherit">Login with Google</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
