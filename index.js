// Computer Lang - Binary number system 

// Low level language -- 0 1 

// 0 - OFF 
// 1 - ON 

// 0000 010101010101
// 010101010101001

// 101001010101001


// High level lang ---> Interpretor and Compiler 

// cout()
// printf 
// System.out.println()
// print()
// console.log()

// console.log("Welcome to js workshop");
// console.log("I love briyani");
// console.log("Love to play Cricket");
// console.log("haii");

// window.alert("Selva is the student");

// document.getElementById("myH1").textContent = "Hello Students";

// document.getElementById("myP").textContent = "Welcome to js class";

// let age = 21;
// let price = 4.5;
// let cgpa = 8.0;

// console.log("Your age is  age");
// console.log("The price is " + price);
// console.log(`Your cgpa is ${cgpa}, your cpga is good`);

// let age = 10; 

// if(age >= 18) {
//     console.log("You are eigible for vote");
// } else {
//     console.log("You are not eigible for vote");
// }

// let mark = 99;

// if(mark < 20 ) { 
//     console.log("You are grade is D, you need imporove");   
// } else if(mark >= 20 && mark < 50) {
//     console.log("You are grade is C, you are good"); 
// } else if(mark >= 50 && mark < 70) {
//     console.log("You are grade is B, you very good"); 
// } else if(mark > 70 && mark <= 100) {
//     console.log("You are grade is A, Awesomee!!!"); 
// }

// if(age >= 18) {
//     console.log("You are eigible for vote");
// } else {
//     console.log("You are not eigible for vote");
// }

// let age = 20;

// let message = age >= 18? "You are eigible for vote" : "You are not eigible for vote"; 

// console.log(message);




// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// let day = 100;

// switch(day) {
//     case 1:
//         console.log("It is monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wed");
//         break;
//     case 4:
//         console.log("It is Thurs");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     default:
//         console.log("Invalid input");
//         break;     
// }


//  index = 0 - n-1
// 0 - 4
// n = length = 5


// let username = "Selva";

// indexOf()

// console.log(username.indexOf("a"));
// console.log(username.lastIndexOf("a"));
// // Trim()
// console.log(username);
// console.log(username.trim());



// console.log(username.toLowerCase());
// console.log(username.toUpperCase());

// let username = "Selva123445666432 Student";

// let firstName = username.slice(0, 5);
// console.log(`Your first name is ${firstName}`);

// let lastName = username.slice(6);
// console.log(`Your last name is ${lastName}`);
// let firstName = username.slice(0, username.indexOf(" "));
// console.log(`Your first name is ${firstName}`);

// let lastName = username.slice(6);
// console.log(`Your last name is ${lastName}`);

// email = selva1234@gmail.com
// Task :- Extarct the username only from that email id and log the output


// loop - Common Concept 


// print 1 to 10

// 1) were we need the start the loop

// 2) Were we stop the loop 

// 3) Increment or decrement operator

// while loop - > Entry control loop 

// let print 1 to 10 using while loop.

// let i = 10;

// while (i >= 1) {
//      console.log(i);       
//     // 2 
// }



// do {   --> exit control loop
    
// } while (condition);

// let i = 1000;
//   i--; 
// do {
//    console.log(i);
//    i++;
// } while(i <= 10);


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// for(var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// task 1

// 1
// 1
// 1
// 1
// 2
// 2
// 2
// 2
// 2

// task 2

// i
// i
// i
// i
// i





// function happyBirthday(name, age) {
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday dear ${name}!!!`);
//     console.log(`Happy birthday to you and you become ${age}`);
// }


// happyBirthday("Selva", 20);  // --> function or method calling
// happyBirthday("Abi shek", 19);  // --> function or method calling



// function hello() {
//     console.log("Hello Students");
// }


// const hello = (name, age) => { console.log(`hello ${name}`);
//  console.log(`hello ${name}, your age is ${age}`)}


// hello("Abi", 20);

//              0         1         2
// const fruits = [
//     "Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Papaya", "Strawberry", "Blueberry", "Raspberry",
//     "Blackberry", "Watermelon", "Cantaloupe", "Honeydew", "Lemon", "Lime", "Cherry", "Peach", "Plum", "Apricot",
//     "Nectarine", "Kiwi", "Pomegranate", "Guava", "Lychee", "Fig", "Date", "Coconut", "Avocado", "Passionfruit",
//     "Dragonfruit", "Jackfruit", "Tangerine", "Clementine", "Mandarin", "Mulberry", "Cranberry", "Gooseberry", "Starfruit", "Durian",
//     "Rambutan", "Persimmon", "Boysenberry", "Currant", "Tamarind", "Sapodilla", "Ugli fruit", "Longan", "Jujube", "Quince"
//   ];


//   fruits.push("veggies"); //it will add the element at the last in the array
//   fruits.pop();  // it will remove the element at the last in the array

//   fruits.unshift("Veggies"); // //it will add the element at the begining of the array


//   fruits.shift("Veggies"); // //it will remove the element at the begining of the array



// let numOfFruits = fruits.length;
// let index = fruits.indexOf("Apple");

// console.log(numOfFruits);
// console.log(index);


// for (let fruit of fruits) {
//       console.log(fruit);
// }



// Spread operator and Rest Paramanter


// Spread operator  ... 

// allow an iteration such as an array or string to be expanded into sperate elements (unpack)


// let username = "Selva Student computer science";
// let letters = [...username].join("-");
// console.log(letters);


// const fruits = [
//     "Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Papaya", "Strawberry", "Blueberry", "Raspberry",
//     "Blackberry", "Watermelon", "Cantaloupe", "Honeydew", "Lemon", "Lime", "Cherry", "Peach", "Plum" ];

// let veggies = ["carrot", "tomato", "Spinach"];
// let foods = [...fruits, ...veggies];
// console.log(foods);

// Rest Parameters = ...

// allow function work with a varaible number of arguments by bundling sperate elements into an array.


// function openFridge(...foods) {
//     console.log(foods);
// }
// const food1 = "briyani";
// const food2 = "Fried rice";
// const food3 = "Veg meals";
// const food4 = "Dosa";
// const food5 = "idly";

// openFridge(food1, food2, food3, food4, food5);

































