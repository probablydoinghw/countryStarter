function displayQuote(quote) {
  const quote2 = quote["quote"]
  const author2 = quote["author"]
  document.getElementById('quote').innerHTML=quote2
  document.getElementById('author').innerHTML=author2
  console.log(quote2)
}

function findQuote() {

  const URL = `https://talaikis.com/api/quotes/random/`;
  const xmlHttp = new XMLHttpRequest()
  
  xmlHttp.open("GET", URL, false)

  xmlHttp.send(null)

  let data = xmlHttp.responseText

  let object = JSON.parse(data);

  displayQuote(object);

  console.log(object)
}
