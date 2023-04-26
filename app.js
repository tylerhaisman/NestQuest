



//header adjustments on scroll
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("active", window.scrollY > 80)
  var headerbtn = this.document.querySelector(".headerbtn");
  headerbtn.classList.toggle("active", window.scrollY > 80);
  if(window.scrollY > 80){
    document.querySelector(".mainlogo").src = "images/logo2.png";
  }
  else{
    document.querySelector(".mainlogo").src = "images/logo1.png";
  }
})

//changing slider current value on slide
$('.slider').on('change', function() {
	let val = $(this).val();
  let priceVal = 4000 * (val/100);
  if(priceVal == 4000){
    priceVal = priceVal + "+";
  }
  if(priceVal == 40){
    priceVal = 0;
  }
  let fullStatement = "Current: About $" + priceVal + " per month";
  $('.centersltext').html(fullStatement);
});

console.log("NestQuest Init...");

  // Get the search button element by its ID
  const searchBtn = document.getElementById("searchBtn");
  // The code inside this function will be executed when the button is clicked
  searchBtn.addEventListener("click", function() 
  {

  //GETTING INPUTS
  //Gathering hobby inputs
  var nightlife = false;
  nightlife = document.querySelector(".nightlife").checked;
  console.log(nightlife);
  var gyms = false;
  gyms = document.querySelector(".gyms").checked;
  console.log(gyms);
  var parks = false;
  parks = document.querySelector(".parks").checked;
  console.log(parks);
  var sports = false;
  sports = document.querySelector(".sports").checked;
  console.log(sports);
  var shopping = false;
  shopping = document.querySelector(".shopping").checked;
  console.log(shopping);
  var food = false;
  food = document.querySelector(".food").checked;
  console.log(food);
  var academics = false;
  academics = document.querySelector(".academics").checked;
  console.log(academics);
  var theatre = false;
  theatre = document.querySelector(".theatre").checked;
  console.log(theatre);

  //Gathering bedroom and bathroom dropdown inputs
  //Source: https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
  //Bedrooms
  var e = document.getElementById("bedroom-dropdown");
  var value = e.value;
  var beds = e.options[e.selectedIndex].text;
  console.log(beds);
  //Bathrooms
  var e = document.getElementById("bedroom-dropdown");
  var value = e.value;
  var baths = e.options[e.selectedIndex].text;
  console.log(baths);


//Reading CSV file data (will work in browser)
//Source: https://www.youtube.com/watch?v=WrI19Qp6Uoc&ab_channel=SouthBridge
//Source: https://www.reddit.com/r/learnjavascript/comments/nf6iga/how_to_use_papaparse_for_a_local_csv_file_with_a/
  var data = [];
  var papa_csv = Papa.parse('datasets/MockData.csv', {
    dynanicTyping: true,
    download: true,
    header: true,
    delimiter:",",
    complete: function(results) {
        data = results.data;


        //We first need to filter out the datapoints that are not the correct bedroom and bathroom sizes
        // for(var i = 0; i < data.length; i++){
        //   var LAT = data[i].LATITUDE;
        //   var LONG = data[i].LONGITUDE;
        //   var distGym = data[i].distGym;
        //   var distNightlife = data[i].distNightlife;
        //   var distParks = data[i].distParks;
        //   var distSports = data[i].distSports;
        //   var distShopping = data[i].distShopping;
        //   var distFood = data[i].distFood;
        //   var distAcademics = data[i].distAcademics;
        //   var distTheatre = data[i].distTheatre;
        //   console.log(LAT);
        //   console.log(LONG);
        //   console.log(distGym);
        //   console.log(distNightlife);
        //   console.log(distParks);
        //   console.log(distSports);
        //   console.log(distShopping);
        //   console.log(distFood);
        //   console.log(distAcademics);
        //   console.log(distTheatre);
        // }

                //Gathering price input
  const priceMaxinput = document.getElementById("slider");
  const priceMax = priceMaxinput.value;
  console.log(priceMaxinput.value * 40); //Adjust from the 100 scale to our custom pricing scale


  //Gathering location input

  //Make location just the state itself
  const location = document.getElementById("search");
  const enteredLocation = location.value;
  console.log(enteredLocation);

        for(var i = 0; i < data.length; i++){
          //BEDROOMS
          var dataBeds = Math.floor(data[i].Bedrooms/1000);
          if(beds == "Six or more"){
            if(dataBeds < 6){
              data[i] = 0000;
            }
          }
          else if(beds == "One"){
            if(dataBeds != 1){
              data[i] = 0000;
            }
          }
          else if(beds == "Two"){
            if(dataBeds != 2){
              data[i] = 0000;
            }
          }
          else if(beds == "Three"){
            if(dataBeds != 3){
              data[i] = 0000;
            }
          }
          else if(beds == "Four"){
            if(dataBeds != 4){
              data[i] = 0000;
            }
          }
          else if(beds == "Five"){
            if(dataBeds != 5){
              data[i] = 0000;
            }
          }
          else{
            //Print some error
          }

          //BATHROOMS
          var dataBaths = Math.floor(data[i].Bathrooms/1000);
          if(baths == "Six or more"){
            if(dataBaths < 6){
              data[i] = 0000;
            }
          }
          else if(baths == "One"){
            if(dataBaths != 1){
              data[i] = 0000;
            }
          }
          else if(baths == "Two"){
            if(dataBaths != 2){
              data[i] = 0000;
            }
          }
          else if(baths == "Three"){
            if(dataBaths != 3){
              data[i] = 0000;
            }
          }
          else if(baths == "Four"){
            if(dataBaths != 4){
              data[i] = 0000;
            }
          }
          else if(baths == "Five"){
            if(dataBaths != 5){
              data[i] = 0000;
            }
          }
          else{
            //Print some error
          }

          //WHERE I AM STRUGGLING:
          var price = data[i].Price;
          if(price > priceMax){
            data[i] = 0000;
          }
          // var loc = data[i].City + ", " + data[i].State;
          // if(loc != enteredLocation){
          //   data[i] = 0000;
          // }
        }
        
        
        var appendedData = [];
        for(var i = 0; i < data.length; i++){
          if(data[i] != 0){
            appendedData.push(data[i]);
          }
        }
        data = appendedData;

        //For each value in the appended array, we will get the sum of all selected distances of each datapoint
        for(var i = 0; i < data.length; i++){

          // Filter data by state
          if (data[i].State !== enteredLocation) {
            data[i] = 0000;
          }
          console.log(data);
          var distGym = data[i].distGym;
          var distNightlife = data[i].distNightlife;
          var distParks = data[i].distParks;
          var distSports = data[i].distSports;
          var distShopping = data[i].distShopping;
          var distFood = data[i].distFood;
          var distAcademics = data[i].distAcademics;
          var distTheatre = data[i].distTheatre;

          //total sum of all selected hobbies' distances
          var sum = 0;

          if(nightlife == true){
            sum = Number(sum) + Number(distNightlife);
          }
          if(gyms == true){
            sum = Number(sum) + Number(distGym);
          }
          if(parks == true){
            sum = Number(sum) + Number(distParks);
          }
          if(sports == true){
            sum = Number(sum) + Number(distSports);
          }
          if(shopping == true){
            sum = Number(sum) + Number(distShopping);
          }
          if(food == true){
            sum = Number(sum) + Number(distFood);
          }
          if(academics == true){
            sum = Number(sum) + Number(distAcademics);
          }
          if(theatre == true){
            sum = Number(sum) + Number(distTheatre);
          }
          data[i].sum = sum;
        }
        
        //variables created so we can conduct both sorts
        var quickData = data;
        data = quickData;

      for (let i = 0; i < 3; i++) {
        let resultElement = document.getElementById("result" + (i + 1));
        let addressElement = document.createElement("p");
        addressElement.textContent = data[i].Address;
        resultElement.appendChild(addressElement);

        let cityElement = document.createElement("p");
        cityElement.textContent = data[i].City + ", " + data[i].State + " " + data[i].Zip;
        resultElement.appendChild(cityElement);
      }

        var mergeData = data;

        //Invoking quick sort
        var n = quickData.length;
        quickSort(quickData, 0, n - 1);
        console.log(quickData);

        //Invoking merge sort
        var n = mergeData.length;
        mergeSort(mergeData, 0, n - 1);
        console.log(mergeData);

        data = quickData;

        var option = document.getElementById("option1");
        option.innerHTML = data[0].Address;
        option = document.getElementById("city1");
        option.innerHTML = data[0].City + ", " + data[0].State + " " + data[0].Zip;

        var option = document.getElementById("option2");
        option.innerHTML = data[1].Address;
        option = document.getElementById("city2");
        option.innerHTML = data[1].City + ", " + data[1].State + " " + data[1].Zip;

        var option = document.getElementById("option3");
        option.innerHTML = data[2].Address;
        option = document.getElementById("city3");
        option.innerHTML = data[2].City + ", " + data[2].State + " " + data[2].Zip;
    }
  }); 

  //Random Image to House
  //Get Random Images 
  const min = 1;
  const max = 9;

  //Random House Picture
  let randomInt1 = Math.floor(Math.random() * (max - min + 1) + min);
  let randomInt2 = Math.floor(Math.random() * (max - min + 1) + min);
  while (randomInt2 === randomInt1) {
    randomInt2 = Math.floor(Math.random() * (max - min + 1) + min);
  }
  let randomInt3 = Math.floor(Math.random() * (max - min + 1) + min);
  while (randomInt3 === randomInt1 || randomInt3 === randomInt2) {
    randomInt3 = Math.floor(Math.random() * (max - min + 1) + min);
  }

  const firstimage = document.getElementById("option1box");
  firstimage.src = "images/home" + randomInt1 + ".jpeg";

  const secondimage = document.getElementById("option2box");
  secondimage.src = "images/home" + randomInt2 + ".jpeg";

  const thirdimage = document.getElementById("option3box");
  thirdimage.src = "images/home" + randomInt3 + ".jpeg";
  


});

//Quick Sort
//Source: Professor Aman's lecture slides on sorting
function quickSort(array, low, high){
  if(low < high){
    var pivot = partition(array, low, high);
    quickSort(array, low, pivot - 1);
    quickSort(array, pivot + 1, high);
  }
}
function partition(array, low, high){
  //selecting the pivot element
  var pivot = array[low].sum;
  var up = low
  var down = high;

  while(up < down){
    for(var j = up; j < high; j++){
      if(array[up].sum > pivot){
        break;
      }
      up++;
    }
    for(var j = high; j > low; j--){
      if(array[down].sum < pivot){
        break;
      }
      down--;
    }
    if(up < down){
      swap(array, up, down);
    }
  }
  swap(array, low, down);
  return down;
}
function swap(array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

//Merge Sort
//Source: Professor Aman's lecture slides on sorting
//Notes: I would say that we should organize some of the google maps api information with this? 
function mergeSort(array, left, right){
  if(left < right){
    var mid = Math.floor(left + (right - left) / 2);
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
  }
}
function merge(array, left, mid, right){
  var n1 = mid - left + 1;
  var n2 = right - mid;
  var X = new Array(n1);
  var Y = new Array(n2);

  for(var i = 0; i < n1; i++){
    X[i] = array[left + i];
  }
  for(var j = 0; j < n2; j++){
    Y[j] = array[mid + 1 + j];
  }

  var i = 0;
  var j = 0;
  var k = left;

  while (i < n1 && j < n2) 
  {
    if (X[i].sum <= Y[j].sum) 
    {
      array[k].sum = X[i].sum;
      i++;
    } 
    else 
    {
      array[k].sum = Y[j].sum;
      j++;
    }
    k++;
  }
  while (i < n1) 
  {
    array[k].sum = X[i].sum;
    i++;
    k++;
  }
  while (j < n2) 
  {
    array[k].sum = Y[j].sum;
    j++;
    k++;
  }
}

const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');

// Create an empty array to store locations
let locations = [];

// Parse the CSV file
Papa.parse('datasets/MockData.csv', {
  download: true,
  header: true,
  complete: function (results) {
    results.data.forEach((row) => {
      // Assuming your CSV has columns named "City" and "State"
      let city = row.City;
      let state = row.State;
      let location = `${city}, ${state}`;

      // Add the location to the locations array
      locations.push(location);
    });
  },
});


//Search Button Stuff
searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';

  if (value.length === 0) {
    searchResults.style.display = 'none';
    return;
  }

  const filteredResults = locations.filter(location => location.toLowerCase().includes(value));
  filteredResults.forEach(result => {
    const div = document.createElement('div');
    div.textContent = result;
    div.addEventListener('click', () => {
      searchInput.value = result;
      searchResults.style.display = 'none';
    });
    searchResults.appendChild(div);
  });

  searchResults.style.display = filteredResults.length > 0 ? 'block' : 'none';
});


