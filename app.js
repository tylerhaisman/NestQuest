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
  //IN PROGRESS


  //Gathering price input
  const priceMaxinput = document.getElementById("slider");
  const priceMax = priceMaxinput.value; 
  console.log(priceMaxinput.value * 40); //Adjust from the 100 scale to our custom pricing scale


  //Gathering location input
    const location = document.getElementById("search");
    const enteredLocation = location.value;
    console.log(enteredLocation);

//Reading CSV file data (will work in browser)
//Source: https://www.youtube.com/watch?v=WrI19Qp6Uoc&ab_channel=SouthBridge
//Source: https://www.reddit.com/r/learnjavascript/comments/nf6iga/how_to_use_papaparse_for_a_local_csv_file_with_a/
  var data = [];
  var papa_csv = Papa.parse('datasets/MockData.csv', {
    dymanicTyping: true,
    download: true,
    header: true,
    delimiter:",",
    // step: function(result){
    //   allData = result;
    // },
    complete: function(results) {
        data = results.data;

        //Since we are sorting by distance, we need to add up the relevant distances from each element in the array
        var distanceArray = [];

        //variables created 
        var quickData = data;
        var mergeData = data;

        //We code here
        //Invoking quick sort

    }
}); 
});

//Quick Sort Outline:
//source: Professor Aman's lecture slides on sorting
function quickSort(array, low, high){
  if(low < high){
    var pivot = partition(array, low, high);
    quickSort(array, low, pivot - 1);
    quickSort(array, pivot + 1, high);
  }
}
function partition(array, low, high){
  //selecting the pivot element
  var pivot = array[low];
  var up = low
  var down = high;

  while(up < down){
    for(var j = up; j < high; j++){
      if(array[up] > pivot){
        break;
      }
      up++;
    }
    for(var j = high; j > low; j--){
      if(array[down] < pivot){
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

//Merge Sort outline
//source: Professor Aman's lecture slides on sorting
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
    if (X[i] <= Y[j]) 
    {
      array[k] = X[i];
      i++;
    } 
    else 
    {
      array[k] = Y[j];
      j++;
    }
    k++;
  }
  while (i < n1) 
  {
    array[k] = X[i];
    i++;
    k++;
  }
  while (j < n2) 
  {
    array[k] = Y[j];
    j++;
    k++;
  }
}