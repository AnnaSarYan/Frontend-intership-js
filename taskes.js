//1.գրել ֆունկցիա, որը վերադարձնում է ֆիբոնաչիի հաջորդականության n-րդ անդամը։(խնդիրը գրել իտերատիվ, ռեկուրսիվ տարբերակներով).
//նույն խնդիրը գրել նաև cache տարբերակով (այսինքն մի հատ arr cache ունենք, որի մեջ պահում ենք ամեն հարցման ժամանակ գտած հաջորդականության անդամը, 
//հետո հաջորդը գտնելուց, ստուգում ենք եթե կա էդ զանգվածի մեջ միանգամից դա ենք վերադարձնում, եթե չթ համ դնում ենք զանգվածի մեջ համ էլ արժեքը վերադարձնում ենք)

// Variant 1
var fibonacci = function (n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
// Variant 2
let memo = { };
function fibonacci(n, memo = {}) {
    if (memo[n]) {
      return memo[n];
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
var lengthOfLastWord = function(s) {
    let words = s.splice(" ");
    return words[words.length-1].length;
};

// Return the sum of all the unique elements of nums.
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

var sumOfUnique = function(nums) {
    let uniqueElements = [];
    for(let i = 0; i<nums.length; i++){
        let index = uniqueElements.indexOf(nums[i]);
        if(index === -1){
        uniqueElements.push(nums[i])} else{
            uniqueElements[index] = 0;
        };
    }
    return sum = uniqueElements.reduce((acc, curr) => acc + curr, 0);  
};