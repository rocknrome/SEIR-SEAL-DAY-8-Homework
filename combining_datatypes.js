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
console.log(apartmentBuilding[2])
console.log('==============================')