import * as React from "react";
import "./../assets/scss/App.scss";
import { GoogleLogout } from "react-google-login";
import * as googleCred from '../assets/google_cred_json_web.json'


class Logout extends React.Component{
  
    onSuccess = () => {
        alert('Logout made successfully');
    }

    render() {
        return (
            <GoogleLogout
                clientId={googleCred.web.client_id}
                buttonText="Logout"
                onLogoutSuccess={this.onSuccess}
            />
        );
    }
}

export default Logout;