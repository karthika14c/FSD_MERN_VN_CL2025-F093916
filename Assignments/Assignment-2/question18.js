function startExam(callback) {
    console.log("Exam started");
    callback();
}
function evaluateExam(callback) {
    setTimeout(() => {
        console.log("Evaluating answers");
    }, 2000)
    callback();
}
function declareResult() {
    setTimeout(() => {
        console.log("Result declared");
    }, 4000)
}

startExam(() => {
    evaluateExam(() => {
        declareResult(() => {

        })
    })
})

