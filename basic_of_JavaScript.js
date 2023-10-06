// console.log("suyog");
// account = "suyog@gmail.com";
// city = "talegaon dighe";
// password = 4587196;

// console.table([account, city, password]);

// const mnyfunction =function() {
//     console.log("hello word")
    
// }
// console.log(mnyfunction);

// const gamespace = new String('suyog');
// console.log(gamespace[0]);
// console.log(gamespace.__proto__);

//  const gamespace = new String("suyog");
// // in slice takes the  negative number  as well as positive & in subdtring it take only positive value
// const another = gamespace.slice(-8, 4);
// console.log(another);


//trim the string
// const trimstring = "   suyog dighe ";
// console.log(trimstring);
// console.log(trimstring.trim());

//url clear

// const url = "http//suyog.com/suyog%20dighe"
// console.log(url.replace('%20', '-'));

//string operation

/*
.toString()
.toFixed(number)
.toPrecision(number between 1-21)




*/

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));


//date function

let mydate = new Date();


console.log("here use the to string ");
console.log(mydate.toString());


console.log("here use the to Date String");
console.log(mydate.toDateString());

console.log("here use the To Locale Date String");
console.log(mydate.toLocaleDateString());

console.log("here is check the type of the mydate");
console.log(typeof (mydate));


console.log("here use the by giving the date ,month,year values");
let create = new Date(2023, 24, 25);
console.log(create.toDateString());


let newdate = new Date()
console.log(newdate.toLocaleDateString());

console.log(newdate.getDate());

console.log(newdate.getMonth()+1);

console.log(newdate.getDay());

console.log(newdate.getFullYear());


newdate.toLocaleString('default', {
    weekday: "long"
    
});
console.log('default');




 
