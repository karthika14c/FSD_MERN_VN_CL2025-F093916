function placeOrder(callback) {
    console.log("Order Placed");
    callback();
}
function cookFood(callback) {
    setTimeout(() => {
        console.log("Food Cooking");
    }, 2000)
    callback();
}
function deliverFood() {
    setTimeout(() => {
        console.log("Food Delivered");
    }, 4000)
}

placeOrder(() => {
    cookFood(() => {
        deliverFood(() => {

        })
    })
})

