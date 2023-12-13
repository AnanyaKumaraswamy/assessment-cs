const perf = require('execution-time')();


// 1) Sum Zero
console.log("1.Sum Zer0: ");
function addToZero(nums){
    

    for (let i=0; i<nums.length - 1; i++){
        for (let j= i+1; j<nums.length; j++ ){
            if(nums[i] + nums[j] === 0){
                console.log(nums, 'true');
                return true;
            }
        }
    }

    console.log(nums, 'false');
    return false;
}
perf.start(); 
addToZero([]);
let results1 = perf.stop();
console.log("execution-time", results1.preciseWords);


perf.start(); 
addToZero([1]);
let results2 = perf.stop();
console.log("execution-time", results2.preciseWords);


perf.start(); 
addToZero([1, 2, 3]);
let results3 = perf.stop();
console.log("execution-time", results3.preciseWords);


perf.start(); 
addToZero([1, 2, 3, -2]);
let results4 = perf.stop();
console.log("execution-time", results4.preciseWords);




// 2) Unique Characters
console.log("2.Unique Characters: ");

function hasUniqueChars (word){
   
    const stringArr = word.split('');
    console.log(stringArr);

    for( i=0; i<stringArr.length; i++){
        for(j=i+1; j<=stringArr.length; j++){
            if(stringArr[i] === stringArr[j]){
                console.log(word, 'false');
                return false;
            }
        }
    }
    console.log(word, 'true');
    return true;

}

perf.start();
hasUniqueChars("Monday");
let result1 = perf.stop();
console.log("execution-time", result1.preciseWords);

perf.start();
hasUniqueChars("Moonday");
let result2 = perf.stop();
console.log("execution-time", result2.preciseWords);

perf.start();
hasUniqueChars("Sunday");
let result3 = perf.stop();
console.log("execution-time", result3.preciseWords);

perf.start();
hasUniqueChars("Encryption");
let result4 = perf.stop();
console.log("execution-time", result4.preciseWords);



// 3) Pangram Sentence
console.log("3.Pangram Sentence: ");

function isPangram (sentence){
   
    sentence = sentence.toLowerCase();
    const allAlphabetsStr = 'abcdefghijklmnopqrstuvwxyz';
    const allAlphabetsArr = allAlphabetsStr.split('');

    
    for( i=0; i<=allAlphabetsArr.length; i++){
             if(sentence.search(allAlphabetsArr[i]) === -1){
                console.log(sentence, 'false');
                return false;
            }
     }
    console.log(sentence, 'true');
    return true;

}

perf.start();
isPangram("The quick brown fox jumps over the lazy dog!");
result1 = perf.stop();
console.log("execution-time", result1.preciseWords);

perf.start();
isPangram("I like cats, but not mice");
result2 = perf.stop();
console.log("execution-time", result2.preciseWords);

// 4) Longest Word
console.log("4.Longest Word: ");

function findLongestWord(paramArr){
   
    console.log(paramArr);
    let longestWord = '';

    for( i=0; i<paramArr.length; i++){

             if(paramArr[i].length > longestWord.length){
                longestWord = paramArr[i];
            }
     }
    console.log('Longest Word:', longestWord, ' ; Length: ', longestWord.length); 
}

perf.start();
findLongestWord(["hi", "hello", "how", "are", "you", "Ananya"]);
result1 = perf.stop();
console.log("execution-time", result1.preciseWords);

perf.start();
findLongestWord(["This", "vacation", "is", "the", "best"]);
result2 = perf.stop();
console.log("execution-time", result2.preciseWords);




