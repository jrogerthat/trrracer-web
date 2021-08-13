import * as React from "react";
import "./../assets/scss/App.scss";
import GoogleLogin from "react-google-login";
import * as googleCred from '../assets/google_cred_json_web.json'

class Login extends React.Component{
  
onSuccess = (res) => {
    console.log('[Login Sucess] currentUser:', res.profileOb);
}

onFailure = (res) => {
    console.log('[Login Failed] res:', res);
}

  render() {
    return (
        <GoogleLogin
            clientId={googleCred.web.client_id}
            buttonText="Log in with Google"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    );
  }
}

export default Login;
