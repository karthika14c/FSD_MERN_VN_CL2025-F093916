let name ="Karthi";
let message =`Hello, ${name}! Welcome to JavaScript.`;
console.log(message);

let upperName = name.toUpperCase();
console.log("Uppercase Name:", upperName);

if (message.length > 10) {
    console.log("Message has more than 10 characters");
} else {
    console.log("Message has 10 or fewer characters");
}

if (message.includes("JavaScript")) {
    console.log("Message contains the word 'JavaScript'");
} else {
    console.log("Message does not contain 'JavaScript'");
}
