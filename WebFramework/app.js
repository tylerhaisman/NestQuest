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


console.log("Cheese");





//MAKE A BUNCH OF ACCOUNTS TO FARM FREE API KEYS

//Feed that input into the zillow api and record the top 3 responses based off of the criterias

// Get the search button element by its ID
const searchBtn = document.getElementById("searchBtn");


//Get BathRoom and Bedroom sizes //NOTE FOR TYLER: ITS NOT SHOWING HOW MANY YOU HAVE SELECTED
const bedroomDropdown = document.querySelector('#bedroom-dropdown');
const bedroomOptions = document.querySelectorAll('#bedroom-dropdown + .dropdown-content a');

let bedroomSize;
let bathroomSize;

bedroomOptions.forEach(option => {
  option.addEventListener('click', () => {
    console.log('Bedroom selected:', option.innerText);
    bedroomSize = option.innerText;
  });
});

const bathroomDropdown = document.querySelector('#bathroom-dropdown');
const bathroomOptions = document.querySelectorAll('#bathroom-dropdown + .dropdown-content a');

bathroomOptions.forEach(option => {
  option.addEventListener('click', () => {
    console.log('Bathroom selected:', option.innerText);
    bathroomSize = option.innerText;
  });
});



  // The code inside this function will be executed when the button is clicked
  searchBtn.addEventListener("click", function() 
  {

    //Get Quiz Results Inputs
  const inputedLocation = document.getElementById("search");
  const priceMaxinput = document.getElementById("slider")



    //Get User's input based off the input box in html
    const enteredLocation = inputedLocation.value;
    const priceMax = priceMaxinput.value; 
    console.log(priceMaxinput.value * 40); //Compensate for the slider low value
    console.log(enteredLocation);
    //Zillow API
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://zillow56.p.rapidapi.com/search?location=" + encodeURIComponent(enteredLocation) + "&monthlyPayment_max=" + encodeURIComponent(priceMax * 40) + "&baths_min=" + encodeURIComponent(bathroomSize) + "&baths_min=" + encodeURIComponent(bedroomSize) + "&isApartment=true",
      "method": "GET",
      "headers": 
      {
        "X-RapidAPI-Key": "01a62e7bf6msh151291ada004a93p150330jsnc314a78c1737",
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com"
      }
  };
  // Make the API call using jQuery's ajax() method
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});


//Extract those lats and longs and feed them into google maps api with the hobbies 'text' and choose the ones that have the overall less distance.

