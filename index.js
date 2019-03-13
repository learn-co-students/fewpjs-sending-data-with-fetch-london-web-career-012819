const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {
  const body = {
    firstName: "Sander",
    registryMessage: "Hi there human"
  }
  const params = {
    method: "POST",
    body: JSON.stringify(body)
  }

  return fetch('http://guestbook.example.com/register', params)
      .then(response => response.json())
      .then(json => json.message)
}

function errorSelf() {

  const body = {
    firstName: "Sander",
    registryMessage: "Hi there human"
  }
  const params = {
    method: "POST",
    body: JSON.stringify(body)
  }

  return fetch('http://guestbook.example.com/register-error', params)
      .then(response => response.json())
      .catch(_ => ':(')
}
