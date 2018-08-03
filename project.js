let foodSpots = [{"id":1,"name":"Snooze an A.M. Eatery","address":"3800 N Lamar Blvd #120","website":"https://snoozeeatery.com/","price":"$$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":2,"name":"Counter Cafe","address":"1914 E 6th St, Austin, TX 78702","website":"http://countercafe.com/","price":"$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"no"},
{"id":3,"name":"Upper Crust Bakery","address":"4508 Burnet Rd, Austin, TX 78756","website":"http://www.uppercrustbakery.com/","price":"$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":4,"name":"Sugar Mama's Bakeshop","address":"2406 Manor Rd, Austin, TX 78722","website":"http://www.sugarmamasbakeshop.com/","price":"$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":5,"name":"Tor Le Jours Bakery","address":"6808 N Lamar Blvd B-115, Austin, TX 78752","website":"http://www.tljus.com/","price":"$$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":6,"name":"Le Cafe Crepe","address":"200 San Jacinto Blvd A, Austin, TX 78701","website":"http://cafecrepeofaustin.com/","price":"$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"no"},
{"id":7,"name":"Trace","address":"200 Lavaca St, Austin, TX 78701","website":"http://www.traceaustin.com/","price":"$$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":8,"name":"Waffle House","address":"Waffle House, 7809 E Ben White Blv, Austin, TX 78744","website":"https://www.wafflehouse.com/","price":"$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":9,"name":"1886 Cafe & Bakery","address":"604 Brazos St, Austin, TX 78701","website":"https://driskillhotel.com/dining/","price":"$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":10,"name":"Texas French Bread","address":"2900 Rio Grande St, Austin, TX 78705","website":"https://texasfrenchbread.com/","price":"$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":11,"name":"Paperboy","address":"1203 E 11th St, Austin, TX 78702","website":"http://www.paperboyaustin.com/","price":"$","drinks":"no","breakfast":"yes","lunch":"no","dinner":"no"},
{"id":12,"name":"Josephine House","address":"1601 Waterston Ave, Austin, TX 78703","website":"http://josephineofaustin.com/","price":"$$$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":13,"name":"Dai Due","address":"2406 Manor Rd, Austin, TX 78722","website":"https://www.daidue.com/","price":"$$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":14,"name":"Goodall's Kitchen & Bar","address":"1900 Rio Grande St, Austin, TX 78705","website":"https://goodallskitchen.com/","price":"$$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":15,"name":"Jack Allens","address":"3600 N Capital of Texas Hwy, Austin, TX 78746","website":" jackallenskitchen.com","price":"$$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":16,"name":"Hopdoddy","address":"1400 S Congress Ave, Austin, TX 78704","website":"https://www.hopdoddy.com/","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":17,"name":"Torchy's Tacos","address":"1822 S. CONGRESS AVE. AUSTIN TX 78704","website":"https://torchystacos.com/location/south-congress/","price":"$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"no"},
{"id":18,"name":"Hyde Park Bar and Grill","address":"4521 Westgate Blvd, Austin, TX 78745","website":"http://hpbng.com/","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":19,"name":"Irene's","address":"506 West Ave Austin, TX 78701","website":"http://irenesaustin.com/","price":"$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":20,"name":"Raku Asian Sushi Bistro","address":"2222 Rio Grande St, Austin, TX 78705","website":"rakusushibistro.com/","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":21,"name":"Pieous","address":"12005 US-290, Austin, TX 78737","website":"null","price":"$$","drinks":"yes","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":22,"name":"True Food Kitchen","address":"222 West Avenue HR100, Austin, TX 78701","website":"https://www.truefoodkitchen.com/","price":"$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":23,"name":"Flower Child","address":"500 W. 2nd St., #133 Austin, TX 78701","website":"https://www.iamaflowerchild.com/","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":24,"name":"P. Terry's ","address":"701 S Capital of Texas Hwy, West Lake Hills, TX 78746","website":"https://pterrys.com/","price":"$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":25,"name":"The Capital Grille","address":"117 W 4th St, Austin, TX 78701","website":"https://www.austincapitolgrill.com/","price":"$$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":26,"name":"Odd Duck ","address":"1201 S Lamar Blvd, Austin, TX 78704","website":"https://oddduckaustin.com/","price":"$$$","drinks":"yes","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":27,"name":"Bouldin Oak Cafe","address":"1900 S 1st St, Austin, TX 78704","website":"Bouldincreekcafe.com","price":"$$$","drinks":"no","breakfast":"yes","lunch":"yes","dinner":"no"},
{"id":28,"name":"Lenior","address":"1807 S 1st St, Austin, TX 78704","website":"lenoirrestaurant.com","price":"$$$","drinks":"no","breakfast":"no","lunch":"no","dinner":"yes"},
{"id":29,"name":"Sway","address":"1417 S 1st St, Austin, TX 78704","website":"https://swaythai.com/","price":"$$$","drinks":"yes","breakfast":"yes","lunch":"yes","dinner":"yes"},
{"id":30,"name":"Uchi","address":"801 S Lamar Blvd, Austin, TX 78704","website":"uchiaustin.com","price":"$$$","drinks":"yes","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":31,"name":"Homeslice","address":"1415 S Congress Ave, Austin, TX 78704","website":"Homeslicepizza.com","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":32,"name":"Perry's SteakHouse and Grill","address":"114 W 7th St, Austin, TX 78701","website":"perryssteakhouse.com","price":"$$$","drinks":"yes","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":33,"name":"Contigo","address":"2027 Anchor Ln, Austin, TX 78723","website":"contigotexas.com","price":"$$","drinks":"yes","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":34,"name":"Mattie's","address":"811 W Live Oak St, Austin, TX 78704","website":"mattiesaustin.com","price":"$$","drinks":"no","breakfast":"no","lunch":"no","dinner":"yes"},
{"id":35,"name":"Black's","address":"3110 Guadalupe St, Austin, TX 78705","website":"blacksbbq.com","price":"$$","drinks":"no","breakfast":"no","lunch":"yes","dinner":"yes"},
{"id":36,"name":"Summer Moon","address":"11005 Burnet Rd #112, Austin, TX 78758","website":"woodfiredcoffee.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":37,"name":"Juice Land","address":"2601 E Cesar Chavez St, Austin, TX 78702","website":"https://www.juiceland.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":38,"name":"Seventh Flag","address":"1506 South First Street, Austin, Texas 78704","website":"http://www.seventhflagcoffee.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":39,"name":"Figure 8","address":"1111 Chicon St, Austin, TX 78702","website":"www.figure8coffeepurveyors.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":40,"name":"Halcyon","address":"218 West 4th Street Austin, TX 78701","website":"halcyoncoffeebar.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":41,"name":"Manana","address":"1603 S Congress Ave, Austin, TX 78704","website":"https://mananaaustin.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":42,"name":"Blenders & Bowls","address":"206 E 4th St, Austin, TX 78701","website":"blendersandbowls.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":43,"name":"Jamba Juice","address":"10710 Research Blvd Ste. 306, Austin, TX 78759","website":"www.jambajuice.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"},
{"id":44,"name":"Smoothie KIng","address":"4301 W William Cannon Dr #200, Austin, TX 78749","website":"https://www.smoothieking.com/","price":"$","drinks":"yes","breakfast":"no","lunch":"no","dinner":"no"}]


let funSpots =[{"id":1,"name":"Barton Creek Square","category":"Shopping","address":"2901 S Capital of Texas Hwy, Austin, TX 78746","type":"Mall","free":"null"},
{"id":2,"name":"The Domain","category":"Shopping","address":"11410 Century Oaks Terrace, Austin, TX 78758","type":"Mall","free":"null"},
{"id":3,"name":"Southpark Medows","category":"Shopping","address":"9500 S IH 35 Frontage Rd, Austin, TX 78748","type":"Shopping Center","free":"null"},
{"id":4,"name":"The Shops at Arbor Walk","category":"Shopping","address":"10515 N Mopac Expy, Austin, TX 78759","type":"Shopping Center","free":"null"},
{"id":5,"name":"Hill Country Galleria","category":"Shopping","address":"12700 Hill Country Blvd, Bee Cave, TX 78738","type":"Shopping Center","free":"null"},
{"id":6,"name":"Village Shopping Center","category":"Shopping","address":"2700 W Anderson Ln #308, Austin, TX 78757","type":"Shopping Center","free":"null"},
{"id":7,"name":"Creatures B.","category":"Shopping","address":"1206 S Congress Ave, Austin, TX 78704","type":"Boutique","free":"null"},
{"id":8,"name":"Spring Frost B.","category":"Shopping","address":"5101 Burnet Rd, Austin, TX 78756","type":"Boutique","free":"null"},
{"id":9,"name":"Panache B.","category":"Shopping","address":"7408 Sunset Heights Cir, Austin, TX 78735","type":"Boutique","free":"null"},
{"id":10,"name":"Atown B.","category":"Shopping","address":"5502 Burnet Rd, Austin, TX 78756","type":"Boutique","free":"null"},
{"id":11,"name":"Adelante B.","category":"Shopping","address":"1206 W 38th St # 4104, Austin, TX 78705","type":"Boutique","free":"null"},
{"id":12,"name":"Sunroom B.","category":"Shopping","address":"1603 S Congress Ave, Austin, TX 78704","type":"Boutique","free":"null"},
{"id":13,"name":"Blue Bridal B.","category":"Shopping","address":"4036 S Lamar Blvd suite 100, Austin, TX 78704","type":"Boutique","free":"null"},
{"id":14,"name":"Golden Bones B.","category":"Shopping","address":"3210 Esperanza Crossing #110, Austin, TX 78758","type":"Boutique","free":"null"},
{"id":15,"name":"The Boutique on Stonelake","category":"Shopping","address":"9910 Stonelake Boulevard, Located inside Lexus of Austin, Austin, TX 78759","type":"Boutique","free":"null"},
{"id":16,"name":"Hamilton Pool","category":"Active","address":"Null","type":"null","free":"small cost"},
{"id":17,"name":"Mayfield Park & Nature Preserve","category":"Active","address":"3505 W 35th St, Austin, TX 78703","type":"null","free":"free"},
{"id":18,"name":"Zilker Metropolitan Park","category":"Active","address":"2101 Barton Springs Rd, Austin, TX 78704","type":"null","free":"free"},
{"id":19,"name":"Lady Bird Lake","category":"Active","address":"Austin, TX","type":"null","free":"free"},
{"id":20,"name":"Barton Springs Municipal Pool","category":"Active","address":"2131 William Barton Dr, Austin, TX 78746","type":"null","free":"small cost"},
{"id":21,"name":"Mckinney Falls State Park","category":"Active","address":"5808 McKinney Falls Pkwy, Austin, TX 78744","type":"null","free":"free"},
{"id":22,"name":"Barton Creek Greenblet","category":"Active","address":"Null","type":"null","free":"free"},
{"id":23,"name":"Mount Bonell","category":"Active","address":"Austin, TX 78731","type":"null","free":"free"},
{"id":24,"name":"Zilker Botanical Garden","category":"Active","address":"2220 Barton Springs Rd, Austin, TX 78746","type":"null","free":"small cost"},
{"id":25,"name":"Lake Travis","category":"Active","address":"Texas","type":"null","free":"free"},
{"id":26,"name":"Bullock Texas State History Museum","category":"Entertainment ","address":"1800 Congress Ave, Austin, TX 78701","type":"null","free":"null"},
{"id":27,"name":"LBJ Presidental Library","category":"Entertainment ","address":"2313 Red River St, Austin, TX 78712","type":"null","free":"null"},
{"id":28,"name":"Blanton Museum of Art","category":"Entertainment ","address":"200 E Martin Luther King Jr Blvd, Austin, TX 78712","type":"null","free":"null"},
{"id":29,"name":"Austin Panic Room","category":"Entertainment ","address":"1205 Rio Grande St, Austin, TX 78701","type":"null","free":"null"},
{"id":30,"name":"Jumpoline","category":"Entertainment ","address":"13801 N Mopac Expy #200, Austin, TX 78727","type":"null","free":"null"},
{"id":31,"name":"MainEvent","category":"Entertainment ","address":"13301 North, US-183, Austin, TX 78750","type":"null","free":"null"},
{"id":32,"name":"Pottery Studio & Gallery","category":"Entertainment ","address":"5442 Burnet Rd, Austin, TX 78756","type":"null","free":"null"},
{"id":33,"name":"Pinballz","category":"Entertainment ","address":"8940 Research Blvd, Austin, TX 78758","type":"null","free":"null"},
{"id":34,"name":"Metropolitan Theater","category":"Entertainment ","address":"901 Little Texas Ln, Austin, TX 78745","type":"null","free":"null"},
{"id":35,"name":"Graffiti Park at Castle Hill","category":"Views","address":"1008 Baylor St, Austin, TX 78703","type":"null","free":"free"},
{"id":36,"name":"Austin Zoo","category":"Views","address":"10808 Rawhide Trail, Austin, TX 78736","type":"null","free":"small cost"},
{"id":37,"name":"Pennybacker Bridge","category":"Views","address":"Austin, TX 78746","type":"null","free":"free"},
{"id":38,"name":"Austin Aquarium","category":"Views","address":"13530 US-183 #101, Austin, TX 78750","type":"null","free":"small cost"},
{"id":39,"name":"Soco Bridge","category":"Views","address":"Congress Ave, Austin, TX 78704","type":"null","free":"free"},
{"id":40,"name":"The Oasis","category":"Views","address":"6550 Comanche Trail, Austin, TX 78732","type":"null","free":"small cost"},
{"id":41,"name":"Texas State Capitol","category":"Views","address":"1100 Congress Ave, Austin, TX 78701","type":"null","free":"free"},
{"id":42,"name":"Lake Austin","category":"Views","address":"Texas","type":"null","free":"free"}]
//create helper method to add dom elements
//--loop through new makeBfast [etc] array
//--create p (or whatever) elements w (EX obj['name'])
//--then more for address, etc etc for all info

// const breakfastCard = $('#breakfastCard')

const breakfast = makeBreakfast(foodSpots)
function displayBfast(array) {
  for (el of array) {
    let tableRow = $('<tr></tr>').attr('id', el['id'])
    $('.tableBfast').append(tableRow)

    let name = $('<td></td>').text(el['name'])
    let address = $('<td></td>').text(el['address'])
    let website = $('<td></td>').text("")

    $(tableRow).append(name)
    $(tableRow).append(address)
    $(tableRow).append(website)

    if(el['website'] !== 'null') {
      let link = $('<a></a>').text(el['name'] + " Website").attr('href', el['website'])
      $(website).append(link)
    } else {
      address.text("none")
    }
  }
}

const lunch = makeLunch(foodSpots)
function displayLunch(array) {
  for (el of array) {
    let tableRow = $('<tr></tr>').attr('id', el['id'])
    $('.tableLunch').append(tableRow)

    let name = $('<td></td>').text(el['name'])
    let address = $('<td></td>').text(el['address'])
    let website = $('<td></td>').text("")

    $(tableRow).append(name)
    $(tableRow).append(address)
    $(tableRow).append(website)

    if(el['website'] !== 'null') {
      let link = $('<a></a>').text(el['name'] + " Website").attr('href', el['website'])
      $(website).append(link)
    } else {
      address.text("none")
    }
  }
}

const dinner = makeDinner(foodSpots)
function displayDinner(array) {
  for (el of array) {
    let tableRow = $('<tr></tr>').attr('id', el['id'])
    $('.tableDinner').append(tableRow)

    let name = $('<td></td>').text(el['name'])
    let address = $('<td></td>').text(el['address'])
    let website = $('<td></td>').text("")

    $(tableRow).append(name)
    $(tableRow).append(address)
    $(tableRow).append(website)

    if(el['website'] !== 'null') {
      let link = $('<a></a>').text(el['name'] + " Website").attr('href', el['website'])
      $(website).append(link)
    } else {
      address.text("none")
    }
  }
}

const drinks = makeDrinks(foodSpots)
function displayDrinks(array) {
  for (el of array) {
    let tableRow = $('<tr></tr>').attr('id', el['id'])
    $('.tableDrinks').append(tableRow)

    let name = $('<td></td>').text(el['name'])
    let address = $('<td></td>').text(el['address'])
    let website = $('<td></td>').text("")

    $(tableRow).append(name)
    $(tableRow).append(address)
    $(tableRow).append(website)

    if(el['website'] !== 'null') {
      let link = $('<a></a>').text(el['name'] + " Website").attr('href', el['website'])
      $(website).append(link)
    } else {
      address.text("none")
    }
  }
}


function makeBreakfast(array) {
  let listBreakfast = [];
  for(obj of array) {
    if(obj['breakfast'] === 'yes'){
      listBreakfast.push(obj)
    }
  }
  return listBreakfast
}

function makeLunch(array){
  let listLunch = [];
  for(obj of array) {
    if(obj['lunch'] === 'yes'){
      listLunch.push(obj)
    }
  }
  return listLunch
}

function makeDinner(array){
  let listDinner = [];
  for(obj of array) {
    if(obj['dinner'] === 'yes'){
      listDinner.push(obj)
    }
  }
  return listDinner
}

function makeDrinks(array){
  let listDrinks = [];
  for(obj of array) {
    if(obj['drinks'] === 'yes'){
      listDrinks.push(obj)
    }
  }
  return listDrinks
}

const active = makeActive(funSpots)
 function displayActive(array) {
   for (el of array) {
     let tableRow = $('<tr></tr>').attr('id', el['id'])
     $('.tableActive').append(tableRow)

     let name = $('<td></td>').text(el['name'])
     let address = $('<td></td>').text(el['address'])
     let cost = $('<td></td>').text(el['free'])

     $(tableRow).append(name)
     $(tableRow).append(address)
     $(tableRow).append(cost)

   }
 }

 const views = makeViews(funSpots)
 function displayViews(array) {
   for (el of array) {
     let tableRow = $('<tr></tr>').attr('id', el['id'])
     $('.tableViews').append(tableRow)

     let name = $('<td></td>').text(el['name'])
     let address = $('<td></td>').text(el['address'])
     let cost = $('<td></td>').text(el['free'])

     $(tableRow).append(name)
     $(tableRow).append(address)
     $(tableRow).append(cost)

   }
 }

 const shopping = makeShopping(funSpots)
 function displayShopping(array) {
   for (el of array) {
     let tableRow = $('<tr></tr>').attr('id', el['id'])
     $('.tableShopping').append(tableRow)

     let name = $('<td></td>').text(el['name'])
     let address = $('<td></td>').text(el['address'])
     let type = $('<td></td>').text(el['type'])

     $(tableRow).append(name)
     $(tableRow).append(address)
     $(tableRow).append(type)

   }
 }

 const entertainment = makeEntertainment(funSpots)
 function displayEntertainment(array) {
   for (el of array) {
     let tableRow = $('<tr></tr>').attr('id', el['id'])
     $('.tableEntertainment').append(tableRow)

     let name = $('<td></td>').text(el['name'])
     let address = $('<td></td>').text(el['address'])

     $(tableRow).append(name)
     $(tableRow).append(address)

   }
 }



function makeBreakfast(array) {
  let listBreakfast = [];
  for(obj of array) {
    if(obj['breakfast'] === 'yes'){
      listBreakfast.push(obj)
    }
  }
  return listBreakfast
}

function makeLunch(array){
  let listLunch = [];
  for(obj of array) {
    if(obj['lunch'] === 'yes'){
      listLunch.push(obj)
    }
  }
  return listLunch
}

function makeDinner(array){
  let listDinner = [];
  for(obj of array) {
    if(obj['dinner'] === 'yes'){
      listDinner.push(obj)
    }
  }
  return listDinner
}

function makeDrinks(array){
  let listDrinks = [];
  for(obj of array) {
    if(obj['drinks'] === 'yes'){
      listDrinks.push(obj)
    }
  }
  return listDrinks
}


function makeActive(array) {
  let listActive = [];
  for(obj of array) {
    if(obj['category'] === 'Active'){
      listActive.push(obj)
    }
  }
  return listActive
}

function makeViews(array){
  let listViews = [];
  for(obj of array) {
    if(obj['category'] === 'Views'){
      listViews.push(obj)
    }
  }
  return listViews
}

function makeShopping(array){
  let listShopping = [];
  for(obj of array) {
    if(obj['category'] === 'Shopping'){
      listShopping.push(obj)
    }
  }
  return listShopping
}

function makeEntertainment(array){
  let listEntertainment = [];
  for(obj of array) {
    if(obj['category'] === 'Entertainment '){
      listEntertainment.push(obj)
    }
  }
  return listEntertainment
}

$(document).ready(function(){
   $('#slide-outFood').sidenav();
   $('#slide-outFun').sidenav();
   $('.slider').slider();
   displayBfast(breakfast);
   displayLunch(lunch);
   displayDinner(dinner);
   displayDrinks(drinks);
   displayActive(active);
   displayViews(views);
   displayShopping(shopping);
   displayEntertainment(entertainment);
 });
