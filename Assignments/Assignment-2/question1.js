function numbercheak(num) {
    if (num > 0) {
        console.log("Positive number");
    } else if (num < 0) {
        console.log("Negative number");
    } else {
        console.log("Number is zero");
    }

    if (num % 2 == 0) {
        console.log("Even number");
    }
    else {
        console.log("Odd number");
    }


    if (num % 3 == 0 && num % 5 == 0) {
        console.log("Divisible by both 3 and 5");
    }
    else {
        console.log("Not divisible by both 3 and 5");
    }

}

numbercheak(15)