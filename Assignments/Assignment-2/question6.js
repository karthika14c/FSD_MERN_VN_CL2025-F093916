const totalSeats = 120;
const bookedSeats = 78;
let availableSeats = totalSeats - bookedSeats;
console.log(`Available Seats:${availableSeats}`)
function availableseats() {
    if (availableSeats > 60) {
        console.log("Status: Plenty of Seats Available”")
    }
    else if (availableSeats >= 20 && availableSeats <= 60) {
        console.log("Status: Moderate Availability")
    }
    else if (availableSeats < 20) {
        console.log("Status: Almost Full")
    }
    else {
        console.log("Status:Seats Not Availavle")
    }
}
availableseats()