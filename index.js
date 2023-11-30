const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2)
}
const returnLastTwoDrivers = function() {
    return drivers.slice(2,4)
}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (num1) => (num2) => num1 * num2;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, callback) { 
    if(callback === returnFirstTwoDrivers) {
        return drivers.slice(0, 2)
    }else if(callback === returnLastTwoDrivers) {
        return drivers.slice(2, 4,)
    }
        
    }
