import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { User } from "../reducers/auth/authReducer";
import { StoreState } from "../index";

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary[600],
    "& a": {
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

interface Props {
  onLogoutClick: () => void;
}
export default function Header({ onLogoutClick }: Props) {
  const user = useSelector<StoreState, User | null | false>(
    state => state.auth.user
  );
  const classes = useStyles();

  const renderContent = () => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <Button href="/auth/google" color="inherit">
            Login with Google
          </Button>
        );
      default:
        return (
          <div>
            {`Hello ID: ${user._id.slice(0, 3)}...  `}
            <Button color="inherit" onClick={onLogoutClick}>
              Logout
            </Button>
          </div>
        );
    }
  };
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <a className={classes.title} href="/">
            Emaily
          </a>
          {renderContent()}
        </Toolbar>
      </AppBar>
    </>
  );
}
