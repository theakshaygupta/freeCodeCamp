/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
    var newArr = [];

    var oneMinusTwo = arr1.filter(function (value) {

        if (arr2.indexOf(value) == -1) {
            newArr.push(value);
        }

    });

    var twoMinusOne = arr2.filter(function (value) {

        if (arr1.indexOf(value) == -1) {
            newArr.push(value);
        }

    });

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
