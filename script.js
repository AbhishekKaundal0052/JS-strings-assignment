// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var str1 = "I am a";
var str2 = "Kalvian";
console.log(str1 +" "+ str2)
// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var str = "If you fail, never give up because FAIL means 'First Attempt In Learning'.";
console.log(str)
// Challenge 3: Store a string in a variable and display the length of the string.
var str = "Javascript";
console.log(str.length)
// Challenge 4: Store a string in a variable and convert it into uppercase.
var string = "bmw m4 series";
var uppercased = string.toUpperCase()
console.log(uppercased);
//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var str = "I love programming.";
var modified = str.replace("programming", "JavaScript programming")
console.log(modified)
// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var str = " CSS and Javascript";
var result = str + str + str;
console.log(result);
//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var str = "I am a Kalvian";
var arr = str.split(" ");
console.log(arr)
// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var str = "Time and Tide wait for none";
console.log(str.indexOf("Ti"));
// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var lemon = "When life gives you lemons make lemonade";
console.log(lemon.includes(lemon))
// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var world = "You must be the change you wish to see in the world.";
console.log(world.indexOf("change"))
console.log(world.slice(16,22));
console.log(world.indexOf("world"));
console.log(world.substring(46,51));