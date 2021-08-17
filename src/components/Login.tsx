import * as React from "react";
import "./../assets/scss/App.scss";
import {GoogleLogin}from "react-google-login";
import * as googleCred from '../assets/google_cred_json_web.json';
import { UserSingleton } from "../userSingleton";



class Login extends React.Component{

    // Array of API discovery doc URLs for APIs
DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
//SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';
SCOPES = 'https://www.googleapis.com/auth/drive.file';
  
onSuccess = async (res) => {
    console.log('[Login Sucess] currentUser:', await res);
    let userOb = UserSingleton.getInstance();
    userOb.changeUser(res);
    userOb.changeIsSignedIn();
    userOb.changeState(window.gapi.auth2.getAuthInstance());

    document.getElementById('login').style.display = "none";
    document.getElementById("logout").style.display = "block";
    this.setSigninStatus();
    
}

onFailure = (res) => {
    console.log('[Login Failed] res:', res);
}

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

      /**
       * Print files.
       */
listFiles() {
    window.gapi.client.drive.files.list({
          'pageSize': 100,
          'fields': "nextPageToken, files(id, name)"
    }).then(function(response) {
          
          var files = response.result.files;
          console.log('result files', response.result.files);

          this.appendPre('Files:');
          if (files && files.length > 0) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              this.appendPre(file.name + ' (' + file.id + ')');
            }
          } else {
            this.appendPre('No files found.');
          }
        });
      }

setSigninStatus= async ()=>{
    let userOb = UserSingleton.getInstance();
    let user = userOb.getUser();
    console.log('user in set status',user)
   // if (user.wc == null){
    if (user.Os == null){
      this.setState({
        name: ''
      });
    }
    else{

      var isAuthorized = user.hasGrantedScopes(this.SCOPES);
      console.log('has scopes?', isAuthorized);
      if(isAuthorized){
        // this.setState({
        //   name: user.Ot.Cd
        // });

        this.listFiles();

        // const boundary='foo_bar_baz'
        // const delimiter = "\r\n--" + boundary + "\r\n";
        // const close_delim = "\r\n--" + boundary + "--";
        // var fileName='note-otti';
        // var fileData='hi otti';
        // var contentType='text/plain'
        // var metadata = {
        //   'name': fileName,
        //   'mimeType': contentType
        // };

        // var multipartRequestBody =
        //   delimiter +
        //   'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
        //   JSON.stringify(metadata) +
        //   delimiter +
        //   'Content-Type: ' + contentType + '\r\n\r\n' +
        //   fileData+'\r\n'+
        //   close_delim;

        //   console.log('multi request body',multipartRequestBody);
        //   console.log('gapi client', window.gapi.client);
        //   var request = window.gapi.client.request({
        //     'path': 'https://www.googleapis.com/upload/drive/v3/files',
        //     'method': 'POST',
        //     'params': {'uploadType': 'multipart'},
        //     'headers': {
        //       'Content-Type': 'multipart/related; boundary=' + boundary + ''
        //     },
        //     'body': multipartRequestBody});
        // console.log('request', request)
        // request.execute(function(file) {
        //   console.log(file)
        // });


      }
    }
  }

  render() {
    return (
        <div id="login">
            <GoogleLogin 
            clientId={googleCred.web.client_id}
            buttonText="Log in with Google"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    );
  }
}

export default Login;
