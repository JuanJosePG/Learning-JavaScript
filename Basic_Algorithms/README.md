I'll upload some scripts (provided it from freeCodeCamp) to practice with the JS knowledges that I've learned.

Then, I'll explain the scripts with some expected results.

1. **Celsius to Fahrenheit:**
It converts from Celsius to Fahrenheit. Expected results:
- converToF(-30): -22
- converToF(0): 32
- converToF(30): 86

2. **Reverse a String:**
Reverse the provided string. Expected results:
- reverseString("hello"): "olleh"
- reverseString("Howdy"): "ydwoH"
- reverseString("Greetings from Earth"): "htraE morf sgniteerG"

3. **Factorialize a Number:**
Return the factorial of the provided integer. Expected results:
- factorialize(5): 120
- factorialize(10): 3628800
- factorialize(0): 1

4. **Find the Longest Word in a String:**
Return the length of the longest word in the provided sentence. Expected results:
- findLongestWordLength("The quick brown fox jumped over the lazy dog"): 6
- findLongestWordLength("What is the average airspeed velocity of an unladen swallow"): 8
- findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"): 19

5. **Return largest number in Arrays:**
Return an array consisting of the largest number from each provided sub-array. Expected results:
- largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]): [27, 5, 39, 1001]
- largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]): [9, 35, 97, 1000000]
- largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]): [25, 48, 21, -3]

6. **Confirm the Ending:**
Check if a string ends with the given target string. Expected results:
- confirmEnding("Congratulation", "on"): true
- confirmEnding("He has to give me a new name", "name"): true
- confirmEnding("Open sesame", "game"): false

7. **Repeat a string:**
Repeat a given string for a number times. Expected results:
- repeatStringNumTimes("abc", 3): "abcabcabc"
- repeatStringNumTimes("abc", 1): "abc"
- repeatStringNumTimes("abc", 0): ""

8. **Truncate a String:**
Truncate a string if it's longer than the given maximum string length. Expected results:
- truncateString("Peter Piper picked a peck of pickled peppers", 11): "Peter Piper..."
- truncateString("A-", 1): "A..."
- truncateString("Absolutely Longer", 2): "Ab..."

9. **Finders Keepers:**
Create a function that looks through an array and returns the first element in it that passes a 'truth test'. Expected results:
- findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }): 8
- findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }): undefined

10. **Boo Who:**
Check if a value is classified as a boolean primitive. Expected results:
- booWho([1, 2, 3]): false
- booWho(false): true
- booWho(NaN): false

11. **Title Case a Sentence:**
Return the provided string with the first letter of each word capitalized. Expected results:
- titleCase("I'm a little tea pot"): I'm A Little Tea Pot
- titleCase("sHoRt AnD sToUt"): Short And Stout
- titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"): Here Is My Handle Here Is My Spout

12. **Slice and Splice:**
Copy each element of the first array into the second array, in order. Expected results:
- frankenSplice([1, 2, 3], [4, 5], 1): [4, 1, 2, 3, 5]
- frankenSplice([1, 2], ["a", "b"], 1): ["a", 1, 2, "b"]
- frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2): ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

13. **Fancy Bouncer:**
Remove all falsy values from an array. Expected results:
- bouncer([7, "ate", "", false, 9]): [7, "ate", 9]
- bouncer([false, null, 0, NaN, undefined, ""]): []
- bouncer([null, NaN, 1, 2, undefined]): [1, 2]

14. **Where do I belong:**
Return the lowest index at which a value should be inserted into an array once it has been sorted. Expected results:
- getIndexToIns([10, 20, 30, 40, 50], 35): 3
- getIndexToIns([3, 10, 5], 3): 0
- getIndexToIns([2, 20, 10], 19): 2

15. **Mutations:**
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. Expected results:
- mutation(["hello", "Hello"]): true
- mutation(["hello", "neo"]): false
- mutation(["Noel", "Ole"]): true
