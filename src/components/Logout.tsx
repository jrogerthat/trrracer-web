import * as React from "react";
import "./../assets/scss/App.scss";
import { GoogleLogout } from "react-google-login";
import * as googleCred from '../assets/google_cred_json_web.json'


class Logout extends React.Component{
  
    onSuccess = () => {
        alert('Logout made successfully');
        document.getElementById('login').style.display = "block";
        document.getElementById("logout").style.display = "none";
    }

    render() {
        return (
            <div id="logout">
                <GoogleLogout
                clientId={googleCred.web.client_id}
                buttonText="Logout"
                onLogoutSuccess={this.onSuccess}
                />
            </div>
           
        );
    }
}

export default Logout;