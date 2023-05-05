let container = document.getElementById("screen");
let countersection = document.getElementById("counter");
// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python

fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json?property=Van Cortlandt Park')
  .then(response => response.json())
  .then(data => {
    displayData(data);
    parseData(data);
  })
  .catch(error => console.log(error));


function displayData( data ){
  data.forEach( function(item, index){
    console.log(item, index);
    let newItem = document.createElement("div");
    if( index == 0){
      newItem.classList.add('active');}
    newItem.classList.add('item');
    newItem.setAttribute('data-animal',  getAnimalType( item ) );
    newItem.innerHTML = `
<div class="display">
    <div class="phone"><img class="gif" src="js/assets/phone-call.gif"></div>
 
 <div class="info">
    CALLED IN ${item.date_and_time_of_initial.replace("T", " ")} BY ${item.call_source}
    <br>
    LOCATION: ${item.location}
    <br>
    ANIMAL CLASS: ${item.animal_class}
    <br>
    SPECIES: ${item.species_description} (${item.of_animals})
    <br>
    CONDITION: <span id="condition">${item.animal_condition}</span>
</div>

<div class="pixel"><img class="gif" src="js/assets/${item.animal_class.replace(";#", " ")}.gif"></div>

<div class="response">
RESPONDED
<br>
${item.date_and_time_of_ranger.replace("T", " ")}
</div>
</div>
    `;
    container.appendChild(newItem);  
    
   
  });
}


function getAnimalType( item ){
  let animal = '';
  if (item.animal_class == 'Birds') animal = 'birds'
  else if (item.animal_class == 'Raptors') animal = 'birds'
  else if (item.animal_class == 'Domestic;#Birds') animal = 'birds'
  else if (item.animal_class == 'Birds;#Domestic') animal = 'birds'
  else if (item.animal_class == 'Marine Reptiles') animal = 'reptiles'
  else if (item.animal_class == 'Terrestrial Reptile or Amphibian') animal = 'reptiles'
  else if (item.animal_class == 'Small Mammals-RVS') animal = 'mammals'
  else if (item.animal_class == 'Coyotes') animal = 'mammals'
  else if (item.animal_class == 'Small Mammals-non RVS') animal = 'mammals'
  else if (item.animal_class == 'Domestic;#Small Mammals-non RVS') animal = 'mammals'
  else if (item.animal_class == 'Deer') animal = 'mammals'
  else if (item.animal_class == 'Domestic') animal = 'domestic'

  return animal;
}

const parseData = (data) => {
  // Set up variables for the counts
  let birdCount = 0 // These are `let` because they will change
  let reptileCount = 0
  let mammalCount = 0
  let domesticCount = 0
  let undefinedCount = 0

  // Go through each item in the object
  data.forEach(item => {
    if (item.animal_class == 'Birds') birdCount++
    else if (item.animal_class == 'Raptors') birdCount++
    else if (item.animal_class == 'Domestic;#Birds') birdCount++
    else if (item.animal_class == 'Birds;#Domestic') birdCount++

    else if (item.animal_class == 'Marine Reptiles') reptileCount++
    else if (item.animal_class == 'Terrestrial Reptile or Amphibian') reptileCount++

    else if (item.animal_class == 'Small Mammals-RVS') mammalCount++
    else if (item.animal_class == 'Coyotes') mammalCount++
    else if (item.animal_class == 'Small Mammals-non RVS') mammalCount++
    else if (item.animal_class == 'Domestic;#Small Mammals-non RVS') mammalCount++
    else if (item.animal_class == 'Deer') mammalCount++

    else if (item.animal_class == 'Domestic') domesticCount++

    else undefinedCount++
  })

  // Some telemetry!
  console.log('bird: ' + birdCount)
  console.log('reptile: ' + reptileCount)
  console.log('mammal: ' + mammalCount)
  console.log('domestic: ' + domesticCount)
  console.log('Undefined: ' + undefinedCount)
}

document.getElementById('next').addEventListener('click', function(){
  let current = document.querySelector('.active');
  let next = current.nextElementSibling;
  current.classList.remove('active');
  next.classList.add('active');

  let nextAnimalType = next.dataset.animal;
  console.log(nextAnimalType);
  updateCount(nextAnimalType);
});

document.getElementById('back').addEventListener('click', function(){
  let current = document.querySelector('.active');
  let back = current.previousElementSibling;
  current.classList.remove('active');
  back.classList.add('active');
});

function conditionColor( item ){
  if(item.animal_condition == 'Unhealthy') document.getElementById('condition').style.color = "yellow";
  else if(item.animal_condition == 'Injured') document.getElementById('condition').style.color = "red";
}

let birdCount = 1 // These are `let` because they will change
let reptileCount = 0
let mammalCount = 0
let domesticCount = 0
let undefinedCount = 0
function updateCount( animaltype ){
  //updates the page's count for this item animal type
  // item
  if(animaltype == 'birds'){
    birdCount++;
    countersection.querySelector('#birdcount').innerText = birdCount;
  }
 
  else if(animaltype == 'reptiles'){
    reptileCount++;
    countersection.querySelector('#reptilecount').innerText = reptileCount;
  }

  else if(animaltype == 'mammals'){
    mammalCount++;
    countersection.querySelector('#mammalcount').innerText = mammalCount;
  }

  else if(animaltype == 'domestic'){
    domesticCount++;
    countersection.querySelector('#domesticcount').innerText = domesticCount;
}
}
