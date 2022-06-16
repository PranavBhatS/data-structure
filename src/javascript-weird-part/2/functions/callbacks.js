function sayHiLater(greeting) {

    setTimeout(() => {
        console.log(greeting)
    }, 3000);
}

tellMeWhenItDone(sayHiLater)

function tellMeWhenItDone(callback) {
    callback('from callback');
}