const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf(){
  return fetch("http://guestbook.example.com/register", {
    method: "POST",
    body: {
      firstName: "Kian",
      registryMessage: "Hello"
    }
  })
  .then(function(response){return response.json()})
  .then(function(json){return json.message})
}

function errorSelf(){
  return fetch("http://guestbook.example.com/register-error", {
    method: "POST",
    body: {
      firstName: "Kian",
      registryMessage: "Hello"
    }
  })
  .then(function(response){
    return response.json()})
  .then(function(json){
    return json.message
 }).catch(function(x){return ":("})
}

// function errorSelf() {
//   return fetch("http://guestbook.example.com/register-error", {
//     "method": "POST",
//     "body": {
//       "firstName": "Byron the Poodle",
//       "registryMessage": "Bite!"
//     }
//   }).then(function(response) {
//     return response.json();
//   }).then(function(json) {
//     return json.message;
//   }).catch(function(x) {
//     // console.log(x) // If you want to see the error message that came in
//     return ":(";
//   });
// }
