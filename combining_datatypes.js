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