// set variable for input
//find object
function displayCountry(countryObject) {
  const name = countryObject["name"]
  const capital = countryObject["capital"]
  const currencyName = countryObject["currencies"][0]["name"]
  const currencySymbol = countryObject["currencies"][0]["symbol"]
  document.getElementById('name').innerHTML=name
  document.getElementById('capital').innerHTML="Capital: " + capital
  document.getElementById('currencyName').innerHTML="Currency: " + currencyName
  document.getElementById('currencySymbol').innerHTML="Symbol: " + currencySymbol
  console.log(name, capital, currencyName, currencySymbol)
}
// set to variables
//display











function findCountry() {
  const countryRequested = document.getElementById("country-name").value;
// use variable in URL
//searching API by name; and the name is countryRequested; fullText=true means displays all information
  const URL = `https://restcountries.eu/rest/v2/name/`+ countryRequested +`?fullText=true`;
  // new request
  const xmlHttp = new XMLHttpRequest()
  // getting URL (false is default)
  //URL is telling where it's going
  //countryRequested is thailand
  xmlHttp.open("GET", URL, false)
  // not sending anywhere (null)
  xmlHttp.send(null)
  // setting data to be xmlHttp.responseText
  // you can manipulate let but not const
  let data = xmlHttp.responseText
  // turns the string of data (parses) into an object (library)
  let object = JSON.parse(data)

  displayCountry(object[0])

  console.log(object)

}

$(document).ready(function(){
  document.getElementById('updateCountry').addEventListener("click", findCountry())
})

//make into function
//
//
