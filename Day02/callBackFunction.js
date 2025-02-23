
function checkAvailability (movieName, call){
    console.log(`Checking the movie name`);

    setTimeout(() => {
        console.log(`Movie ${movieName} is Available`)
        call();
    }, 2000);
}
function playMovie(){
console.log(`Now playing this movie`);
}
checkAvailability("Lord of the Rings",playMovie )