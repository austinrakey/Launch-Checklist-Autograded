// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(pickPlanet(listedPlanets));
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const selectedPlanet = pickPlanet(listedPlanets); // Pick a random planet
        addDestinationInfo(
            document, 
            selectedPlanet.name, 
            selectedPlanet.diameter, 
            selectedPlanet.star, 
            selectedPlanet.distance, 
            selectedPlanet.moons, 
            selectedPlanet.image
        );

    
 const button = document.getElementById("formSubmit")
 button.addEventListener("click", event => {
    event.preventDefault();
    //this.window.alert("someting happens");
    // let pilot = document.getElementsByName("pilotName").value
    let pilot = document.querySelector('input[name=pilotName]')
    let copilot = document.querySelector('input[name=copilotName]')
    let fuelLevel = document.querySelector('input[name=fuelLevel]')
    let cargoLevel = document.querySelector('input[name=cargoMass]')

    // this.window.alert(pilot.value + copilot.value)

    formSubmission(document, document.getElementById("faultyItems"), pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
   })
 })
});

