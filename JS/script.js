const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) === "string") {
        console.log (str.split('').reverse().join(''));
    } else {
        console.log("Ошибка.");
    }
}

reverse(someString);
