function calculate(a, b, callback) {
    const result = a + b; // You can change this to any operation
    callback(result);
}

calculate(5, 3, function(result) {
    console.log("The result is: ", result);
});