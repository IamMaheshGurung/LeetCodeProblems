/*Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map <method className=
//Solution ✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️

function mapArray(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}
let arr = [1, 2, 3, 4, 5];
let fn = function(item, index) {
    return item * index;
};

let transformedArray = mapArray(arr, fn);
console.log(transformedArray); // Output: [0, 2, 6, 12, 20]/*


/*Given an array of integers arr and a function fn, 
create a function filterArray that returns a new array containing only the 
elements of arr for which fn returns true.
The returned array should be created such that 
returnedArray[i] = arr[i] if fn(arr[i], i) == true.
Please solve it without the built-in Array.filter method.


//Solution ✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️

function filterArray(arr1, fn1){
    let array=[];
    for(i=0; i<arr1.length; i++){
        if(fn1(arr1[i],i)){
            array.push((arr1[i]))
        }
    }
    return array
}
let arr1=[-1,20, 0,4,4,];
let fn1=function(item, index){
    
    return item < index;
}


let filterArrays= filterArray(arr1, fn1);
console.log(filterArrays)


function filterArray(arr1, fn1){
    let array=[];
    for(let i=0; i<arr1.length; i++){
        if(fn1(arr1[i], i)) {
            array.push(arr1[i]);
        }
    }
    return array;
}

let arr1=[1,20, 0,4,4,];
let fn1=function(item, index){
    return item > index;
}

let filterArrays= filterArray(arr1, fn1);
console.log(filterArrays); // Output: [20, 4, 4]*/



//Problem No 3:

/*Write a function transformArray that 
takes an array of numbers and a function fn. 
The function transformArray should return a new array 
where each element is the result of applying fn to the 
corresponding element in the original array.

The function fn will take two arguments: 
the current element and its index.
Please solve it without using the built-in Array.map method.
Here's an example of how it should work:*/

//Solution ✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️

/*function transformArray(arr, fn){
    let result = [];
    for(i=0; i<arr.length;i++){
        result.push(fn(arr[i],i));

    }
    return result;
}



let arr = [1, 2, 3, 4, 5];
let fn = function(item, index) {
    return item * index;
};

let transformedArray = transformArray(arr, fn);
console.log(transformedArray); // Output: [0, 2, 6, 12, 20]*/



// problem No 4:
/*Write a function filterEvenNumbers that takes an array of numbers and 
returns a new array containing only the even numbers from the original array.
The function should use a higher-order function to determine 
if a number is even.
Please solve it without using the built-in Array.filter method.


//solution ✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️
function filterEvenNumbers(arr){
    let result=[];
    for(i=0; i<arr.length; i++){
        if((arr[i]%2==0)){
            result.push(arr[i]);
        }

    }
    return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = filterEvenNumbers(arr);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

*/

//Problem No 5;
/*Write a function sumArray that takes an array of numbers 
and a function fn. The function sumArray should return the 
sum of applying fn to each element in the array.
The function fn will take two arguments: the current element and its index.
Please solve it without using the built-in Array.reduce method.


//Solution✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️
function sumArray(arr, fn){
    let result=0;
    for(let i=0; i<arr.length; i++){
        result=result + fn(arr[i],i)
    }
    return result;
}




let arr = [1, 2, 3, 4, 5];
let fn = function(item, index) {
    return item * index;
};

let sum = sumArray(arr, fn);
console.log(sum); // Output: 40
*/

/*Write a function findLongestWord that takes an array of words 
and a function fn. The function findLongestWord should return
the longest word in the array that satisfies the condition 
specified by fn.
The function fn will take one argument: the current word.
Please solve it without using the built-in Array.filter 
or Array.reduce methods.


//Solution ✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️✍️❤️❤️
function findLongestWord(arr, fn){
    let longestWord = "";
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i]) && arr[i].length>longestWord.length){
            longestWord=arr[i];
        }
        
    }
    return longestWord;
}
let arr = ["apple", "banana", "cherry", "date", "elderberry"];
let fn = function(word) {
    return word.length > 5;
};

let longestWord = findLongestWord(arr, fn);
console.log(longestWord); // Output: "elderberry"*/


/*Write a function findShortestWord that takes an array of words 
and a function fn. The function findShortestWord should return the 
shortest word in the array that satisfies the condition specified by fn.
The function fn will take one argument: the current word.
Please solve it without using the built-in Array.filter or Array.reduce methods.

function findShortestWord(arr, fn){
    let shortWord =arr.find(fn); or //let shortWord=arr[0];
    if(!shortWord) return "";
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i]) &&  arr[i].length < shortWord.length){
            shortWord=arr[i];
        }

    }
    return shortWord;
}

let arr = ["apple", "banana", "cherry", "date", "elderberry"];
let fn = function(word) {
    return word.length > 3;
};

let shortestWord = findShortestWord(arr, fn);
console.log(shortestWord); // Output: "date"


*/