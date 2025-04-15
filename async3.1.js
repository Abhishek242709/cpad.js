async function simulateFlow() {
    await new Promise(resolve => setTimeout(() => {
        console.log("Start");
        resolve();
    }, 1000));

    await new Promise(resolve => setTimeout(() => {
        console.log("Process");
        resolve();
    }, 1000));

    await new Promise(resolve => setTimeout(() => {
        console.log("Finish");
        resolve();
    }, 1000));
}

simulateFlow();