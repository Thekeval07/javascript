const array = ['keval','sagar','raj']
const array2 = ['hello','hi',]

//length
let len  = array.length
console.log(len);

// concat()
let join = array.concat(array2)
console.log(join);

// constructor 
let constructor = array.constructor
console.log(constructor);

// copyWithin()
array.copyWithin(3,0)
console.log(array);

// entries()
const itrator = array.entries()
for(let entry of itrator)
{
    console.log(entry);
}

//fill()
console.log(array.fill('kp'));

// filter
const number = [1,2,3,4,5,6,7,8,9]
function check(number){
    if(number % 2 == 0)
        return true
    else
        return false
}

console.log(number.filter(check));

// find()
function even(number){
    return number % 3 == 0
}
console.log(number.find(even));

//flatMap()
let num2 = [1,2,3,4,5]
const result = num2.flatMap((x) =>(x ** 2))
console.log(result);

// forEach()
function square(ele){
    console.log(ele * ele);

}
num2.forEach(square)

// from()
let newArray = Array.from("abc")
console.log(newArray);

//includes
console.log(array.includes('jatin'));

// isArray()
console.log(arrr.isArray(array));



