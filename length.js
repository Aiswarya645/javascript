let arr = ["eye", "ear", "hea", "leg", "nose"];
let length = 3; 

let arr1 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === length) {
        arr1.push(arr[i]);
    }
}

console.log(arr1);
