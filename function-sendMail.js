 //update this with your js_form selector
 var form_id_js = "fcf-form-id";

 var data_js = {
     "access_token": "1b8nvy8hbw8k4663gvbjwhob" // sent after you sign up
 };

 function js_onSuccess() {
     // remove this to avoid redirect
     window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
 }

 function js_onError(error) {
     // remove this to avoid redirect
     window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
 }

 var sendButton = document.getElementById("fcf-button");

 function js_send() {
     sendButton.value='Sending…';
     sendButton.disabled=true;
     var request = new XMLHttpRequest();
     request.onreadystatechange = function() {
         if (request.readyState == 4 && request.status == 200) {
             js_onSuccess();            
         } else
         if(request.readyState == 4) {
             js_onError(request.response);
         }
     };
     var mailname = document.querySelector("#" + form_id_js + " [name='Name']").value;
     var subject = document.querySelector("#" + form_id_js + " [name='Email']").value;
     var message = document.querySelector("#" + form_id_js + " [name='Message']").value;
     data_js['Name'] = mailname;
     data_js['Email'] = subject;
     data_js['Message'] = message;
     var params = toParams(data_js);

     request.open("POST", "https://postmail.invotes.com/send", true);
     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

     request.send(params);

     return false;
 }

//  sendButton.onclick = js_send;'


 function toParams(data_js) {
     var form_data = [];
     for ( var key in data_js ) {
         form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
     }

     return form_data.join("&");
 }

 var js_form = document.getElementById(form_id_js);
 js_form.addEventListener("submit", function (e) {
     e.preventDefault();
 });



















// function sendMail() {
//     /* ...code here...    */
// }

// node.js - https://www.npmjs.org/package/node-mandrill

// const mandrill = require('node-mandrill')('<your API Key>'); 

// function sendEmail ( _name, _email, _subject, _message) {
//     mandrill('/messages/send', {
//         message: {
//             to: [{email: _email , name: _name}],
//             from_email: 'noreply@yourdomain.com',
//             subject: _subject,
//             text: _message
//         }
//     }, function(error, response){
//         if (error) console.log( error );
//         else console.log(response);
//     });
// }

// define your own email api which points to your server.

// app.post( '/api/sendemail/', function(req, res){
            
//     let _name = req.body.name;
//     let _email = req.body.email;
//     let _subject = req.body.subject;
//     let _messsage = req.body.message;

//     implement your spam protection or checks. 

//     sendEmail ( _name, _email, _subject, _message );

// });
// and then use use $.ajax on client to call your email API.


// function sendMail() {
//     $.ajax({
//       type: 'POST',
//       url: 'https://mandrillapp.com/api/1.0/messages/send.json',
//       data: {
//         'key': 'YOUR API KEY HERE',
//         'message': {
//           'from_email': 'YOUR@EMAIL.HERE',
//           'to': [
//               {
//                 'email': 'RECIPIENT@EMAIL.HERE',
//                 'name': 'RECIPIENT NAME (OPTIONAL)',
//                 'type': 'to'
//               }
//             ],
//           'autotext': 'true',
//           'subject': 'YOUR SUBJECT HERE!',
//           'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
//         }
//       }
//      }).done(function(response) {
//        console.log(response); // if you're into that sorta thing
//      });
// }