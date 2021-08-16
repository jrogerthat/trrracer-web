import * as React from "react";
import { hot } from "react-hot-loader";
import { AppBar, Button, Toolbar, IconButton } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import "./../assets/scss/App.scss";

import Login from "./Login";
import Logout from "./Logout";
import { handleClientLoad } from "../googleHelpers";
import * as googleCred from '../assets/google_cred_json_web.json';
import { State } from "./State";
import { UserSingleton } from "../userSingleton";

const CLIENT_ID = googleCred.web.client_id;
const API = googleCred.api;
// Array of API discovery doc URLs for APIs
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/drive.file';//'https://www.googleapis.com/auth/drive.metadata.readonly';



class App extends React.Component<Record<string, unknown>, undefined> {

  state = {
    name: '',
    googleAuth: ''
  }
  // state = new State();

  componentDidMount(){
    var script = document.createElement('script');
    script.onload=this.handleClientLoad;
    script.src="https://apis.google.com/js/api.js";
    document.body.appendChild(script);

    console.log('STATE', this.state);
  }

  initClient = () => {
    try{
      let useOb = UserSingleton.getInstance();
      console.log('is this working:', useOb.getUser());
      window.gapi.client.init({
          'apiKey': API,
          'clientId': CLIENT_ID,
          'scope': SCOPES,
          'discoveryDocs': DISCOVERY_DOCS
        }).then(() => {
          console.log('is this working gapi client', window.gapi.auth2.getAuthInstance())
          this.setState({
            googleAuth: window.gapi.auth2.getAuthInstance()
          })
          this.state.googleAuth.isSignedIn.listen(this.updateSigninStatus);
        //  document.getElementById('signin-btn').addEventListener('click', this.signInFunction);
        //  document.getElementById('signout-btn').addEventListener('click', this.signOutFunction);

      });
    }catch(e){
      console.log('throws error:', e);
    }
  }


  signInFunction =()=>{
    this.state.googleAuth.signIn();
    this.updateSigninStatus()
  }

  signOutFunction =()=>{
    this.state.googleAuth.signOut();
    this.updateSigninStatus()
  }

  updateSigninStatus = ()=> {
    console.log('update sign in status')
    this.setSigninStatus();
  }

  setSigninStatus= async ()=>{
    var user = this.state.googleAuth.currentUser.get();
    console.log('user in set status',user)
    if (user.wc == null){
      this.setState({
        name: ''
      });
    }
    else{
      var isAuthorized = user.hasGrantedScopes(SCOPES);
      if(isAuthorized){
        this.setState({
          name: user.Ot.Cd
        });
        const boundary='foo_bar_baz'
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";
        var fileName='mychat123';
        var fileData='this is a sample data';
        var contentType='text/plain'
        var metadata = {
          'name': fileName,
          'mimeType': contentType
        };

        var multipartRequestBody =
          delimiter +
          'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
          JSON.stringify(metadata) +
          delimiter +
          'Content-Type: ' + contentType + '\r\n\r\n' +
          fileData+'\r\n'+
          close_delim;

          console.log(multipartRequestBody);
          var request = window.gapi.client.request({
            'path': 'https://www.googleapis.com/upload/drive/v3/files',
            'method': 'POST',
            'params': {'uploadType': 'multipart'},
            'headers': {
              'Content-Type': 'multipart/related; boundary=' + boundary + ''
            },
            'body': multipartRequestBody});
        request.execute(function(file) {
          console.log(file)
        });
      }
    }
  }

  handleClientLoad = ()=>{
    console.log('HANDLE CLIENT LOAD')
    window.gapi.load('client:auth2', this.initClient);
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
            <Logout />
          </Toolbar>
        </AppBar>
        <div id="content"></div>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
