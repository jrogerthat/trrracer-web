import * as React from "react";
import { hot } from "react-hot-loader";
import { AppBar, Button, Toolbar, IconButton } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import "./../assets/scss/App.scss";

import Login from "./Login";
import Logout from "./Logout";
import GetSources from "./GetSources";



class App extends React.Component<Record<string, unknown>, undefined> {

  public render() {
    return (
      <div className="app">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className="nav-bar" color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="banner">
              Trrracer App
            </Typography>
            <Login />
            <Logout />
          </Toolbar>
        </AppBar>
      <GetSources></GetSources>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
