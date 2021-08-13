import React, { useState } from 'react';
import { gapi } from 'gapi-script';
import * as googleCred from '../assets/google_cred_json_web.json';


class GetSources extends React.Component {

    CLIENT_ID = googleCred.web.client_id;
    API_KEY = googleCred.api;

    // Array of API discovery doc URLs for APIs
    DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

    render(){
        return (
            <div>
            
            </div>
        )
    }

}