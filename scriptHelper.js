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
    // let faultyItems = document.getElementById("faultyItems")

if (validateInput(pilot) === "Not a Number"){
document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`
list.style.visibility = "visible"
} else {
list.style.visibility = "visible"
document.getElementById("pilotStatus").innerHTML = `Invalid Pilot Name!`
launchReady=false
}


if (validateInput(copilot) === "Not a Number"){
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`
    list.style.visibility = "visible"
    } else {
    list.style.visibility = "visible"
    document.getElementById("copilotStatus").innerHTML = `Invalid Copilot Name!`
    launchReady=false
    }

    
if (validateInput(fuelLevel) === "Is a Number"){
        if (fuelLevel>=10000) {
            document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`
            list.style.visibility = "visible"
        } else {
            list.style.visibility = "visible"
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`
            launchReady = false
        }
        } else {
        list.style.visibility = "visible"
        document.getElementById("fuelStatus").innerHTML = `Invalid Fuel Level Entry!`
        launchReady=false
        }

if (validateInput(cargoLevel) === "Is a Number"){
        if (cargoLevel<=10000) {
            document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`
            list.style.visibility = "visible"
        } else {
            list.style.visibility = "visible"
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`
            launchReady = false
        }
        } else {
        list.style.visibility = "visible"
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
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;