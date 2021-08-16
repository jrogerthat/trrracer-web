
import * as googleCred from './assets/google_cred_json_web.json';

const CLIENT_ID = googleCred.web.client_id;
const API_KEY = googleCred.api;

// Array of API discovery doc URLs for APIs
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

export function handleClientLoad(callback){
    console.log("jhandle client load")
    window.gapi.load('client:auth2', initClient(callback));
  }

function initClient(callBack){
    try{
      window.gapi.client.init({
          'apiKey': "",
          'clientId': "",
          'scope': SCOPE,
          'discoveryDocs': [discoveryUrl]
        }).then(() => {
        //   this.setState({
        //     googleAuth: window.gapi.auth2.getAuthInstance()
        //   })
        //   this.state.googleAuth.isSignedIn.listen(this.updateSigninStatus);
        //  document.getElementById('signin-btn').addEventListener('click', this.signInFunction);
        //  document.getElementById('signout-btn').addEventListener('click', this.signOutFunction);

        callBack();

      });
    }catch(e){
      console.log(e);
    }
  }