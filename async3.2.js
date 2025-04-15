async function getUser () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: "John Doe", age: 25 });
        }, 1000);
    });
}

async function logUser() {
    const user = await getUser ();
    console.log(user);
}

logUser();
