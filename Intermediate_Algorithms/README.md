I'll upload some scripts (provided it from freeCodeCamp) to practice with the JS knowledges that I've learned.

Then, I'll explain the scripts with some expected results.

1. **Sum all numbers in a Range:**
Return the sum of those two numbers plus the sum of all the numbers between them. Expected results:
- sumAll([1, 4]): 10
- sumAll([5, 10]): 45
- sumAll([10, 5]): 45

2. **Diff two arrays:**
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. Expected results:
- ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]: ["pink wool"]
- ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]: []
- [1, 2, 3, 5], [1, 2, 3, 4, 5]: [4]

3. **Seek and destroy:**
Remove all elements from the initial array that are of the same value as these arguments. Expected results:
- destroyer([1, 2, 3, 1, 2, 3], 2, 3): [1,1]
- destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3): [1,5,1]
- destroyer(["tree", "hamburger", 53], "tree", 53): ["hamburger"]

4. **Wherefore art thou:**
Make a function that looks through an array of objects and returns an array of all objects that have matching name and value pairs. Expected results:
- whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }): [{ first: "Tybalt", last: "Capulet" }]
- whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }): [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
- whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }): [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

5. **Spinal Tap Case:**
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. Expected results:
- spinalCase("This Is Spinal Tap"): "this-is-spinal-tap"
- spinalCase("TheAndyGriffith_Show"): "the-andy-griffith-show"
- spinalCase("Teletubbies say Eh-oh"): "teletubbies-say-eh-oh"

6. **Pig Latin:**
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
Expected results:
- translatePigLatin("california"): "aliforniacay"
- translatePigLatin("glove"): "oveglay"
- translatePigLatin("eight"): "eightway"

7. **Search and Replace:**
Perform a search and replace on the sentence using the arguments provided and return the new sentence. Expected results:
- myReplace("Let us go to the store", "store", "mall"): "Let us go to the mall"
- myReplace("He is Sleeping on the couch", "Sleeping", "sitting"): "He is Sitting on the couch"
- myReplace("I think we should look up there", "up", "Down"): "I think we should look down there"

8. **DNA Pairing:**
Return the provided character as the first element in each array. Expected results:
- pairElement("ATCGA"): [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
- pairElement("TTGAG"): [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
- pairElement("CTCTA"): [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

9. **Missing Letters:**
Find the missing letter in the passed letter range and return it. Expected results:
- fearNotLetter("abce"): "d"
- fearNotLetter("abcdefghjklmno"): "i"
- fearNotLetter("stvwx"): "u"

10. **Sorted Union:**
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. Expected results:
- uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]): [1, 3, 2, 5, 4]
- uniteUnique([1, 2, 3], [5, 2, 1]): [1, 2, 3, 5]
- uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]): [1, 2, 3, 5, 4, 6, 7, 8]

11. **Convert HTML Entities:**
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. Expected results:
- convertHTML("Dolce & Gabbana"): "Dolce &amp; Gabbana"
- convertHTML("Hamburgers < Pizza < Tacos"): "Hamburgers &lt; Pizza &lt; Tacos"
- convertHTML("Sixty > twelve"): "Sixty &gt; twelve"

12. **Summ all odd Fibonacci Numbers:**
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. Expected results:
- sumFibs(1000): 1785
- sumFibs(4000000): 4613732
- sumFibs(75024): 60696

13. **Summ all primes:**
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. Expected results:
- sumPrimes(10): 17
- sumPrimes(977): 73156

14. **Smallest Common Multiple:**
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. Expected results:
- smallestCommons([1, 5]): 60
- smallestCommons([2, 10]): 2520
- smallestCommons([1, 13]): 360360

15. **Drop it:**
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it. Expected results:
- dropElements([1, 2, 3, 4], function(n) {return n >= 3;}): [3, 4]
- dropElements([0, 1, 0, 1], function(n) {return n === 1;}): [1, 0, 1]
- dropElements([1, 2, 3, 4], function(n) {return n > 5;}): []

16. **Steamroller:**
Flatten a nested array. Expected results:
- steamrollArray([[["a"]], [["b"]]]): ["a", "b"]
- steamrollArray([1, [2], [3, [[4]]]]): [1, 2, 3, 4]
- steamrollArray([1, [], [3, [[4]]]]): [1, 3, 4]

17. **Binary Agents:**
Return an English translated sentence of the passed binary string. Expected results:
- binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"): "Aren't bonfires fun!?"
- binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"): "I love FreeCodeCamp!"

18. **Everything be true:**
Check if the predicate is truthy on all elements of a collection. Expected results:
- truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"): true
- truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"): false
- truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"): true

19. **Arguments optional:**
Create a function that sums two arguments together. Expected results:
- addTogether(2, 3): 5
- addTogether(23, 30): 53
- addTogether(2, "3"): undefined

20. **Map the debris:**
Return a new array that transforms the elements' average altitude into their orbital periods. Expected results:
- orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]): [{name: "sputnik", orbitalPeriod: 86400}]
- orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]): [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
