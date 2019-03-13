const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf(){
  return fetch('http://guestbook.example.com/register', {
    "method": "POST",
    "body": {
      "firstName": "Stuart",
      "registryMessage": "Something"
    }
  }).then(function(response){return response.json()}).then(function(json){return json.message})
}


function errorSelf(){
  return fetch('http://guestbook.example.com/register-error', {
    "method": "POST",
    "body": {
      "firstName": "Stuart",
      "registryMessage": "Something"
    }
  }).then(function(response){return response.json()
  }).then(function(json){return json.message
  }).catch(function(error){
    return ":("
  })
}