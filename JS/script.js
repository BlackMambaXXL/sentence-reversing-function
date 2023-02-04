const someString = 'This is some strange string';

function reverse(str) {
    let arr = str.split(" ");
    arr.reverse();
    let innerArr = [];
    for (let i = 0; i < arr.length; i++) {
        innerArr[i] = arr[i].split("");
        innerArr[i].reverse();
        innerArr[i].join("");

    }
    console.log(innerArr);
}

reverse(someString);
