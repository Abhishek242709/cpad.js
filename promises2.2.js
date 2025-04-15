function connectToServer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Connecting to server...");
            resolve();
        }, 1000);
    });
}

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetching data...");
            resolve();
        }, 1000);
    });
}

function displayResult() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Displaying the result...");
            resolve();
        }, 1000);
    });
}

connectToServer()
    .then(fetchData)
    .then(displayResult);