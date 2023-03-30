//AJACH HAAR

/*PSEUDOCODE
    1. Declare and initialize 3 variables to have the combination, 10, 40, 39
    2. Store each generated numbers in each of the three variables.
    3. Create a string, append the generated number to its end.
    4. Display the content on a dialog box.
*/

//Using 3 different arithmetic calculation to store an integer in each variable.
let combLock1 = 10000/1000;
let combLock2 = 20 * 2;
let combLock3 = 69 - 30;

//Concatenate the values of the three variables.
const combTotal = `${combLock1} - ${combLock2} - ${combLock3}`;

//string to be displayed to the user
const word = "You have received this message because you have been chosen to open an important vault. Here is the combination: " + combTotal;
alert(word); //dialog box

