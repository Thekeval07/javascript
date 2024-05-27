
const str = "Hello, World!";
console.log(str.length); // Output: 13

const str2 = "keval prajapat";
console.log(str2.charAt(0));
console.log(str2.charAt(7));

const str3 = "Keval Prajapati";
console.log(str3.includes("Keval")); // Output: true
console.log(str3.includes("keval")); // Output: false

const str4 = "keval mojidra is doing come back "
console.log(str4.indexOf("come back"));
console.log(str4.indexOf("Come Back"));

const str5 = 'sagar shah is best developer but he so sensitive person.'
console.log(str5.slice(0,5));
console.log(str5.slice(10,18));


const str6 = "Hello, World!";
console.log(str6.substring(0, 5)); // Output: "Hello"
console.log(str6.substring(7, 12)); // Output: "World"

const str7 = 'welcome to my empire'
console.log(str7.replace("empire", "samrajya"));

const str8 = 'welcome to my empire'
console.log(str8.toUpperCase());

const str9 = 'WELCOME TO MY EMPIRE'
console.log(str9.toLocaleLowerCase());

const str10 = '   welcome   to my empire'
console.log(str10.trim());

const name = 'keval,sagar,ketul,krupesh,pratham'
const arryOfString = name.split(",")
console.log(arryOfString);

console.log(true === Boolean(undefined));

let counter = 100;
++counter
console.log(counter);





