// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   let target = document.getElementById("missionTarget")
//    target.outerHTML.replace(/<!--[\s\S]*?-->/g, '');
//    target.innerHTML.replace(/\s/g,'');
// document.outerHTML.replace(/<\!--.*?-->/g, "");
let missionTargetHTML = target.innerHTML.replace(/<!--[\s\S]*?-->/g, '');
target.innerHTML = missionTargetHTML;



   const h2 = document.createElement('h2');
   h2.textContent = "Mission Destination";
   
   const ol = document.createElement('ol');
   const li1 = document.createElement('li');
   li1.textContent = `Name: ${name}`;
   const li2 = document.createElement('li');
   li2.textContent = `Diameter: ${diameter}`;
   const li3 = document.createElement('li');
   li3.textContent = `Star: ${star}`;
   const li4 = document.createElement('li');
   li4.textContent = `Distance from Earth: ${distance}`;
   const li5 = document.createElement('li');
   li5.textContent = `Number of Moons: ${moons}`;
   
   const img = document.createElement('img');
   img.setAttribute('src', imageUrl);



   target.appendChild(h2);
   ol.appendChild(li1);
   ol.appendChild(li2);
   ol.appendChild(li3);
   ol.appendChild(li4);
   ol.appendChild(li5);
   target.appendChild(ol);
   target.appendChild(img);

 }
 
 function validateInput(testInput) {
    if (testInput === "") 
    return "Empty"
    
    if (isNaN(testInput) === false)
    return "Is a Number"
    
    if (isNaN(testInput) === true) {
    return "Not a Number"
    }
}
 


 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchReady = true
    let launchStatus = document.getElementById("launchStatus")
    let launchStatusCheck = document.getElementById("launchStatusCheck")
    list.style.visibility = "visible"
    // let faultyItems = document.getElementById("faultyItems")

if (validateInput(pilot) === "Not a Number"){
document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`
} else {
document.getElementById("pilotStatus").innerHTML = `Invalid Pilot Name!`
launchReady=false
}


if (validateInput(copilot) === "Not a Number"){
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`
    } else {
    document.getElementById("copilotStatus").innerHTML = `Invalid Copilot Name!`
    launchReady=false
    }

    
if (validateInput(fuelLevel) === "Is a Number"){
        if (fuelLevel>=10000) {
            document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`
        } else {
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`
            launchReady = false
        }
        } else {
        document.getElementById("fuelStatus").innerHTML = `Invalid Fuel Level Entry!`
        launchReady=false
        }

if (validateInput(cargoLevel) === "Is a Number"){
        if (cargoLevel<=10000) {
            document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`
        } else {
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`
            launchReady = false
        }
        } else {
        document.getElementById("cargoStatus").innerHTML = `Invalid Cargo Mass Entry!`
        launchReady=false
        }

if (launchReady === true){
    launchStatus.innerHTML = 'Shuttle is Ready for Launch.'
    launchStatus.style.color= 'green'
} else {
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"
    launchStatus.style.color = "red"
}
}
 


 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
     return planetsReturned
 }
 
//  (async () => {
//     const planetsReturned = await myFetch();
//     console.log(planetsReturned); // This will log the resolved value of the promise
// })();



 function pickPlanet(planets) {

    let randomNo = Math.floor(Math.random() * 6)

    return planets[randomNo]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;