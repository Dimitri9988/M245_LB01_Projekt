const Number = {
    num1:17, 
    num2: 20}
const Number2 = {
    num1:14, 
    num2: 17}

// Schut ob Reservqation wsich überschneiden oder pb die ausgewählte zeit verfügbar ist
if (Number.num1 <= Number2.num1 && Number.num1 <= Number2.num2 && Number.num2 <= Number2.num1 && Number.num2 <= Number2.num2 || Number.num1 >= Number2.num1 && Number.num1 >= Number2.num2 && Number.num2 >= Number2.num1 && Number.num2 >= Number2.num2) {
    console.log("Can resevate")
}
    