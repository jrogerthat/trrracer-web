import React, { useState, useEffect } from 'react';
//import { gapi, loadAuth2 } from 'gapi-script';
import * as googleCred from '../assets/google_cred_json_web.json';
import { Col, Row, Spin } from 'antd';
import ListDocuments from './ListDocuments';
//const {google} = require('googleapis');
// import { gapi } from 'gapi-script';
import { findDOMNode } from 'react-dom';

// import { loadAuth2, loadAuth2WithProps, loadClientAuth2 } from 'gapi-script';


    const CLIENT_ID = googleCred.web.client_id;
    const API_KEY = googleCred.api;

    // Array of API discovery doc URLs for APIs
    const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

// const GetSources = () => {
//     const [listDocumentsVisible, setListDocumentsVisibility] = useState(false);
//     const [documents, setDocuments] = useState([]);
//     const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false);
//     const [isFetchingGoogleDriveFiles, setIsFetchingGoogleDriveFiles] = useState(false);
//     const [signedInUser, setSignedInUser] = useState();
//     const handleChange = (file) => {};

    // class GetSources extends React.Component{



    //     initClient(){
    //         console.log('initCLietn')
    //     }
    //     handleClientLoad(){
    //         window.gapi.load('client:auth2', this.initClient);
    //     }

    //     public render(){
    //         return (
    //             <div></div>
    //         )
    //     }

    // }




   // export default GetSources;

    /**
     * Print files.
     */
//     const listFiles = (searchTerm = null) => {
//         console.log('list files')
//         window.gapi
//         setIsFetchingGoogleDriveFiles(true);
//        // gapi.client.drive.files
//         .list({
//             pageSize: 10,
//             fields: 'nextPageToken, files(id, name, mimeType, modifiedTime)',
//             q: searchTerm,
//         })
//         .then(function (response) {
//             setIsFetchingGoogleDriveFiles(false);
//             setListDocumentsVisibility(true);
//             const res = JSON.parse(response.body);
//             setDocuments(res.files);
//         });
//     };

//      /**
//      *  Sign in the user upon button click.
//      */
//     //THIS HA
//     // const handleAuthClick = (event) => {
//     const handleAuthClick = () => {
//         gapi.auth2.getAuthInstance().signIn();
//     };

//     /**
//      *  Called when the signed in status changes, to update the UI
//      *  appropriately. After a sign-in, the API is called.
//      */
//     const updateSigninStatus = (isSignedIn) => {
//         if (isSignedIn) {
//         // Set the signed in user
//         setSignedInUser(gapi.auth2.getAuthInstance().currentUser.je.Qt);
//         setIsLoadingGoogleDriveApi(false);
//         // list files if user is authenticated
//         listFiles();
//         } else {
//         // prompt user to sign in
//         handleAuthClick();
//         }
//     };

//      /**
//      *  Sign out the user upon button click.
//      */
//     const handleSignOutClick = (event) => {
//         setListDocumentsVisibility(false);
//         gapi.auth2.getAuthInstance().signOut();
//     };

//     /**
//      *  Initializes the API client library and sets up sign-in state
//      *  listeners.
//      */
//     const initClient = async () => {
//         console.log('initCLient');
//         setIsLoadingGoogleDriveApi(true);
//         console.log('after set is loading', gapi.client);

//         let auth2 = await loadAuth2(gapi, CLIENT_ID, SCOPES);

//         console.log('AUTH 2',auth2);
//         // gapi.client
//         // .init({
//         //     apiKey: API_KEY,
//         //     clientId: CLIENT_ID,
//         //     discoveryDocs: DISCOVERY_DOCS,
//         //     scope: SCOPES,
//         // })
//         // .then(
//         //     function () {
//         //         console.log('AND THEN')
//         //     // Listen for sign-in state changes.
//         //     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

//         //     // Handle the initial sign-in state.
//         //     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//         //     },
//         //     function (error) {
//         //         console.log('error:', error)
//         //     }
//         // );
//     };


//     const handleClientLoad = async () => {
//         console.log('handleCLientLoad', gapi.auth2, gapi);
//         //const auth2 = loadAuth2(gapi, googleCred.web.client_id, SCOPES);

//         let auth2 = await loadAuth2(gapi, CLIENT_ID, SCOPES);

//         console.log("AUTH 2", auth2);
       
//        // console.log('AUTH2', auth2);
//         gapi.load('client:auth2', initClient);
//       };
    
//       const showDocuments = () => {
//         setListDocumentsVisibility(true);
//       };
    
//       const onClose = () => {
//         setListDocumentsVisibility(false);
//     };

//         return (
//             <div>
//                 <Row gutter={16} className="custom-row">
//                     <ListDocuments 
//                         visible={listDocumentsVisible}
//                         onClose={onClose}
//                         documents={documents}
//                         onSearch={listFiles}
//                         signedInUser={signedInUser}
//                         onSignOut={handleSignOutClick}
//                         isLoading={isFetchingGoogleDriveFiles}
//                     />
//                     <Col span={8}>
//                     <Spin spinning={null}>
//                         <div onClick={() => handleClientLoad()} className="source-container">
//                             <div className="icon-container">
//                                 <div className="icon icon-success">
//                                     "GOOGLE DRIVE ICON"
//                                 </div>
//                             </div>
//                             <div className="content-container">
//                                 <p className="title">Google Drive</p>
//                                 <span className="content">Import documents straight from your google drive</span>
//                             </div>
//                         </div>
//                     </Spin>
//                     </Col>
//                 </Row>
//             </div>
//         )
//  //   }

// }

// export default GetSources;