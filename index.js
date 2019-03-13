let formData = {
  "firstName": "Sofia",
  "registryMessage": "Thank you!"
}

let configObj = {
  "method": "POST",
  "body": formData
}

function registerSelf() {
  return fetch("http://guestbook.example.com/register", configObj)
  .then(function(response) {
    return response.json()
  })
  .then(function(jsonObject) {
    return jsonObject.message
  })
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", configObj)
  .then(function(response) {
    return response.json()
  })
  .then(function(jsonObject) {
    return jsonObject.message
  })
  .catch(function(error) {
    alert(":(")
    return ":("
  }
)



}
