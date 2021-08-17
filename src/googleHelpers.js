
import * as googleCred from './assets/google_cred_json_web.json';
import fs from 'fs';

const CLIENT_ID = googleCred.web.client_id;
const API_KEY = googleCred.api;

// Array of API discovery doc URLs for APIs
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
//const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

export function downloadFile(){

    var fileId = '1MDl7ct_9q4IqAWMGbokrt6fO-IELX06T';
    var dest = fs.createWriteStream('trrrace.json');
    window.gapi.client.drive.files.get({
      fileId: fileId.anchor,
       alt: 'media'
    })
        .on('end', function (d) {
          console.log('Done', d);
        })
        .on('error', function (err) {
          console.log('Error during download', err);
        })
        .pipe(dest);


}

export function testGoogle(){

  console.log(test);

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
    console.log('request exicuted',file)
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
          console.log('request exicuted',file)
        });
}