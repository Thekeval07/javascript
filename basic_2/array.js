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


// join()
let mess = ['javascript','is','scripting', 'language']
console.log(mess.join(" "));

// lastIndexOf
let price = [10,12,25,52,41,14,63,36]
console.log(price.lastIndexOf(52));

// pop()
let list = ['item 1','item 2','item 3','item 4']
console.log(list.pop());
console.log(list.push("item 5"));
console.log(list.shift('item 7'));
console.log(list.unshift("item 1"));

//slice
let item = [1,2,3,4,5,6,7,8]
console.log(item.slice(2,5));

// sort
let city = ["ahmedabad","vadodra","nadiad","surat","gandhinagar"]
console.log(city.sort());

//toLocaleString()
let name = ["keval",5,4452]
console.log(name.toLocaleString());




