import * as React from "react";
import { hot } from "react-hot-loader";
import { AppBar, Button, Toolbar, IconButton } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import "./../assets/scss/App.scss";
import GoogleLogin from "react-google-login";
import * as googleCred from '../assets/google_cred_json_web.json'

import Login from "./Login";

class App extends React.Component<Record<string, unknown>, undefined> {
  
  async handleLogin (googleData){
    const res = await fetch("/api/v3/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
  }

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
          </Toolbar>
        </AppBar>
        <div>
       
        </div>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
