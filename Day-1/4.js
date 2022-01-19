//Q4:-Write a function Boolean isValidURL(String url).

//Without Regural Expression
function isValidURL(url) {
  if (url.substring(0, 7) != 'http://' && url.substring(0, 8) != 'https://') {
    return false
  }
  if (url.substring(url.length - 3) !== '.in' || url.substring(url.length - 4) == '.com') {
    return false
  }
  return true
}

//With Regural Expression
function isValidURL(url) {
  var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if (res == null)
    return false;
  else
    return true;
}

console.log(isValidURL("https://hrithik.codes"))
