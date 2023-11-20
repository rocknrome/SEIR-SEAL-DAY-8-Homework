//   R'N'R   November 20, 2023



////////////////////////////////
//2. Combining Datatypes

//Create an object, called crayonBox, that has a property that is an array. 
//The array should have the names of some crayons. Log one of the elements of that array.
const crayonsObj = {
    crayons: ['red', 'green', 'rose', 'cyan'],
}
console.log(crayonsObj.crayons[3]);
console.log('==============================')   //task divider

//Create an object bottle that has a property that is an object: cap. 
//cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottleObj = {
    cap: 
        capObj = {
            material: 'metal',
            color: 'blue',

    },
}
//console.log(bottleObj) //test print
console.log(bottleObj.cap)
console.log('==============================')   //task divider

//Create an array called receipt that has at least one object in it. 
//The inner objects should be items that have a name and a price. 
//Log one of the properties of that inner object.
const receipt = [
    {
        item: 'Hoodie',
        price: 18.47
    },
];
console.log(receipt[0])
console.log(receipt[0].item + " " + receipt[0].price)
console.log('==============================')   //task divider

//Create an array called apartmentBuilding that has an array as one of its elements, 
const apartmentBuilding = ['floors', 'doors', ['Jonny Lang', 'Christone Ingram', 'Walter Trout'], 'windows'];
//the inner array should be the names of the tenants. Log one of the elements of the inner array.
console.log(apartmentBuilding[2][2])
console.log('==============================')




////////////////////////////////
//3. Combine objects, arrays, and functions more than one level deep

// Create a function knit that returns an object that has the following kinds of properties 
const knit = () => {    //wrapping it up with a function "knit"
    let finalObj = {};  //initilizing an empty object

    finalObj.item = 'scarf';    //adding property "item" to my object
    finalObj.size = 6;          //adding property "size" to my object

//console.log(finalObj)         //test
    return console.log(finalObj);       //return has to be inside the function. not necessary to be there in this case
}
knit();                         //calling the function
console.log('==============================');
//item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object).
//Log one of the elements of that array.
const crayonSelector = () => {                                      //wrapping process with function
    let crayonsObj = {};                                            //creating an empty object
        crayonSelector.colors = ['red', 'green', 'rose', 'cyan'];   //creating property inside our array with an array
                                                                    //have to use ; to close the statement. Otherwise return will not work
    console.log(crayonSelector.colors);                             //print only array elements
}
crayonSelector();                                                   //calling the function

console.log('==============================');

// Create a function powerButton that returns a function called options -
const powerButton = () => {                                         //creating function powerButton
        let options = () => {                                       //creating options function
            let msg = 'Select a song'                               //declaring new variable for the message that I will be returning
            return msg;                                             //returning variable msg to avoid "undefned" issue
        }
    console.log(options())                                          //returning options function
}
powerButton()                                                       //calling powerButton function

//options should console.log a simple message like select a song. Call that inner function
console.log('==============================')



////////////////////////////////
//4. Model a Vending Machine Model a vending machine
// a vending machine is an object
const vendMachine = {                   //declaring object for Vending Machine
                                        //Note to self: including the functionality into this object as well, 
                                        //so my stand-alone functions become a method within the object
                                        //and the function's syntax changes a lot. 
    items: [                            //declaring an array inside of Vending Machine object
        {                               //declaring array elements as also objects
            name: 'candy bar',          //note to self: no need to name those elements, just write those as nameless objects
            price: 2
        },

        {
            name: 'water',
            price: 1.5,
        },

        {
            name: 'ice cream',
            price: 4.5,
        },
    ],                                     //end of array


// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position
//(a number) of the snack and then that snack will be returned.
    vend: (position) => {                   //switching the "position" of an item
                                            //Note to self: this line confused the hell out of me... because it is within an object,
                                            //the function syntax has to be this way. "vend: ()", not "let vend = () => {
                                            //as for a stand-alone function
        switch (position) {                 //using switch-case to go thru those items
            case 1: console.log(`You get ${vendMachine.items[0].name}`);    //accessing a particular item thru interpolation
                break;
            case 2: console.log(`You get ${vendMachine.items[1].name}`);
                break;
            case 3: console.log(`You get ${vendMachine.items[2].name}`);
                break;
            default: console.log(`There is no such item here`);
            return null;                    //have to have return to avoind undefined. being "trickly creative" used null.
        }
    }
};                                      //end of Vending Machine object
vendMachine.vend(2);

// Be able to call vendingMachine.vend() with a valid integer to return a snack
console.log('==============================')



////////////////////////////////
// //5. Callbacks
// Make a function add that takes two arguments (numbers) and sums them together
const add = (numberOne, numberTwo) => {
    let sum = numberOne + numberTwo
    return console.log(sum);
}
add(2,3)
// Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (numberOne, numberTwo) => {
    let difference = numberOne - numberTwo
    return console.log(difference);
}
subtract(2,3)
// Make a function multiply that takes two arguments and multiplies them
const multiply = (numberOne, numberTwo) => {
    let multiplication = numberOne * numberTwo
    return console.log(multiplication);
}
multiply(2,3)
// Make a function divide that takes two arguments and divides them
const divide = (numberOne, numberTwo) => {
    let division = numberOne / numberTwo
    return console.log(division);
}
divide(2,3)
// Make a function calculate that takes three arguments. 
//Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).

let calculate = (num1, num2, 
    operates()) = {
        return 
}
calculate(2,3,)
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote
