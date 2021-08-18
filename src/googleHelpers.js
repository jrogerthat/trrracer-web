
import * as googleCred from './assets/google_cred_json_web.json';
import * as trrraceData from './assets/trrrace.json';
const fs = require('fs-extra')


const CLIENT_ID = googleCred.web.client_id;
const API_KEY = googleCred.api;

// Array of API discovery doc URLs for APIs
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
//const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

export function downloadFile(fileId){
  //let fileS = new FileReader();
  
   // var fileId = '1MDl7ct_9q4IqAWMGbokrt6fO-IELX06T';
   // var dest = fs.createWriteStream('trrrace.json');

   // create a path you want to write to
// :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
// but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
var path = RNFS.DocumentDirectoryPath + '/test.txt';

   gapi.client.drive.files.get({
    fileId: fileId,
    alt: "media"
  }).then(function(res) {
    console.log('RES',res)
    // require the module

// write the file
RNFS.writeFile(path, res, 'utf8')
  .then((success) => {
    console.log('FILE WRITTEN!');
  })
  .catch((err) => {
    console.log(err.message);
  });

    // fsE.writeFile(
    //   './assets',
    //   JSON.stringify(res)
    // );
    // In this case, res.body is the binary data of the downloaded file.
  
  });
       // .pipe(dest);


}

export function getFilesFromFolder() {
  console.log(window.gapi.client);
  window.gapi.client.drive.files.list({
        //'q': "mimeType = 'application/vnd.google-apps.folder' and '159mYuPKRRR15EI9m-yWXsGFLt8evWcHP' in parents",
        //'q': "name='Artifact Trrraces' and mimeType='application/vnd.google-apps.folder'",
        //'q':"'1ORoSWskcw9SCnBGpZd0oHxd08WL7iElE' in parents",
        //'q': "1--1P4dSPEWYYvdDWZ9yJjLWXj1TBpyVO",
        'pageSize': 100,
        'fields': "nextPageToken, files(id, name, webContentLink, webViewLink)"
  }).then(function(response) {
        //console.log('response in get filed in folder',response.result.files[0].webContentLink)
        //download(response.result.files[0].webContentLink, 'testing.json')

        console.log('response',response);


      //   var files = response.result.files;
      //   console.log('result files', response.result.files);

      //   this.appendPre('Files:');
      //   if (files && files.length > 0) {
      //     for (var i = 0; i < files.length; i++) {
      //       var file = files[i];
      //       this.appendPre(file.name + ' (' + file.id + ')');
      //     }
      //   } else {
      //     this.appendPre('No files found.');
      //   }
      });
  }

export function listFiles(){

  var request = window.gapi.client.request({
      'path': 'https://www.googleapis.com/drive/v3/files', //https://www.googleapis.com/drive/v3
      'method': 'GET',
      // 'params': {'uploadType': 'multipart'},
      // 'headers': {
      //   'Content-Type': 'multipart/related; boundary=' + boundary + ''
      // },
      // 'body': multipartRequestBody
  });

  console.log('request', request)
  request.execute(function(file) {
    console.log('request exicuted',file)
  }).then((f)=> {
    console.log(f);
  });
}

export function getFile(){

  var request = window.gapi.client.request({
      'path': 'https://www.googleapis.com/drive/v3/files/1MDl7ct_9q4IqAWMGbokrt6fO-IELX06T', //https://www.googleapis.com/drive/v3
      'method': 'GET',
      // 'params': {'uploadType': 'multipart'},
      // 'headers': {
      //   'Content-Type': 'multipart/related; boundary=' + boundary + ''
      // },
      // 'body': multipartRequestBody
  });

  console.log('request', request)
  request.execute(function(file) {
    console.log('found file',file)
  }).then((f)=> {
    console.log('in then',f);
  });
}

export function googleWriteRequest(formatType, name, data){

      const boundary='foo_bar_baz'
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";
        var fileName=name;
        var fileData=data;
        var contentType= formatType;//'text/plain'
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

          console.log('multi request body',multipartRequestBody);
          console.log('gapi client', window.gapi.client);
          var request = window.gapi.client.request({
            'path': 'https://www.googleapis.com/upload/drive/v3/files',
            'method': 'POST',
            'params': {'uploadType': 'multipart'},
            'headers': {
              'Content-Type': 'multipart/related; boundary=' + boundary + ''
            },
            'body': multipartRequestBody});
        console.log('request', request)
        request.execute(function(file) {
          console.log('request write done',file);
        });
}