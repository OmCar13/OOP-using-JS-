/* 
WITHOUT OBJECT ORIENTED PROGRAMMING
WE HAVE TO DEFINE VARIABLE AND FUNCTIONS EACH TIME SEPERATELY
WHICH CAN BE TEDIOUS 
*/

let manufacturer = "Volvo";
let price = "150,000";
let fuelEfficiecy = "20";

function getCarSuggestion(manufacturer, price, fuelEfficiecy) {
    return `There's a ${manufacturer} with ${fuelEfficiecy} kmpl available at ${price}`
}

/* 
WITH OBJECT PROGRAMMING WE CAN COMBINE THE VARIABLES AND 
*/
