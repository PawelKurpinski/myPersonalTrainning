// var userName = prompt ("What is your name?");
// alert ("Nice to meet you, " + userName);
// console.log("Also great to meet you, " + userName);


// var firstName = prompt ("What's your first name?");
// var lastName = prompt ("What's your last name?");
// var age = prompt ("What's your age?");
// document.write("My neighbour's name is " + firstName + " and his last name is " + lastName + ".");
// document.write(" His age is: " + age);
// console.log("My neighbour's name is " + firstName + " and his last name is " + lastName + ".");
// console.log("His age is: " + age);
//
var age = prompt ("How old are you? I will tell you how many days do you live ;)");
document.write("You live already: " + 365*age + " days");

var age = Number (prompt("What is your age?"));

if (age < 0) {
    console.log("sorry this is wrong age - try again");
}
else if (age===21) {
    console.log("Happy 21th birthday!");
}
else if (age % 2 !== 0) {
    console.log("Yout age is odd");
}

/////////////////////////////////////////////////////
