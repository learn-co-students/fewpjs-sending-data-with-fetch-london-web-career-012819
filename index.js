// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }
// function registerSelf() {
var registerSelf = () => {
  return fetch('http://guestbook.example.com/register', {
    method: "POST",
    body: {
      "firstName": "name",
      "registryMessage": "1,2,3,4"
    }
  }).then(resp => resp.json())
    .then(json => json.message)
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', {
    method: "POST",
    body: {
      "firstName": "name",
      "registryMessage": "1,2,3,4"
    }
  }).then(resp => resp.json())
    .then(json => json.message)
    .catch(error => {
      return ":(";
    })
}











//
// let formData = {
//   "dogName": "Byron",
//   "dogBreed": "Poodle"
// };
//
// let configObj = {
//     method: "POST",
//     body: formData
// }
//
// fetch("http://example.com/dog_logger", configObj)
//   .then(response => response.text)
//   .then(content => {
//     if (response == "OK") {
//       console.log("Added a new dog!");
//     }
//   })
//   .catch(error => {
//     alert("Bad things! Ragnarök!");
//     return "This is an error message. There are many like it, but this one is for log_dogger"
//   })
