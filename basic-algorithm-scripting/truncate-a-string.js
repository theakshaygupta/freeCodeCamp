/*

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

*/


function truncateString(str, num) {

    // If size to truncate is less than 3 then ignore to account '...' size
    if (num <= 3) {
        return str.slice(0, 3).concat('...');
    }
    
    // If given string is smaller than the size given to truncate
    if (num >= str.length) {
        return str;
    }

    return str.slice(0, num-3).concat('...');
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);