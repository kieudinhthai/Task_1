let str_1 = 'webmaster'
let str_2 = 'AABBBCCCCCAADDDD'
let str_3 = 'PPPQRRRSTTQQS'
let str_4 = 'XYZ'
let arr_1 = [10, 15, 3, 7]
let arr_2 = [10, 9, 1, 6]

// Task 1.1
function sortChar(str) {
   let output = ""
   let arr =[]
   for (let i = 0; i < str.length; i++) {
      arr.push(str[i])  
   }
   arr.sort()
   for (let i = 0; i < arr.length; i++) {
     output += arr[i]    
   }

   return output
}

//Task 1.2
function runLengthEncoding(str) {
// AABCC
   let output = '';
   if (str.length > 0) {
      let count = 1;
      let value = str[0];  //A
      for (let i = 1; i < str.length; ++i) {
         var entry = str[i]; //B
         if (entry == value ) {  // false
            count += 1;
         } else {
            count==1?output += ""+ value :output +=count +"" +value;
            count = 1;
            value = entry;
         }
      }
      output +=  '' + entry;
   }

   return output
}

// Task 1.3
function checkSum(arr, k) {
   let result = false
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         if (arr[i] + arr[j] == k) {
            result = true
         }
      }
   }
   return result
}

console.log('------Task 1.1 ---------  ')
console.log('Giving a random string, write a function arrange all characters according alphabet table')
console.log(str_1 + " => " + sortChar(str_1))
console.log('------Task 1.2 ---------  ')
console.log("Compressing data algorithm, it save data like this: the number of data + data. Implement this algorithm.")
console.log(str_2+ " => " +runLengthEncoding(str_2))
console.log(str_3+ " => " +runLengthEncoding(str_3))
console.log(str_4+ " => " +runLengthEncoding(str_4))
console.log('------Task 1.3 ---------')
console.log("Given a list of numbers and a number k, return whether any two numbers from the list add up to k.");
console.log(" [10, 15, 3, 7] and k = 17 => "+ checkSum(arr_1, 17))
console.log(" [10, 9, 1, 6] and k = 17 => "+ checkSum(arr_2, 17))


