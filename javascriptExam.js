// indexOf function() provide the index of the first accurace
let myName = "Paula Sanchez"
console.log(myName.indexOf("San"))
// ===> 6


//repeat. reapet the number as much time as we need
console.log("#0".repeat(2))
//===> #0#0

//include case sensitive search boolean 
console.log("Reilly".includes("ll"))
//====> true



//
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orcharditaaaas',
  'crackpot'
];


// find the logest workd
function findLongestWord(words){
  var maxi="";
  if(words && words.length ){
	words.forEach(function(el,i){
	   if (el.length === maxi.length){
          maxi = el[i-1];
     	}
		else 
		if(el.length+1 > maxi.length)
			{
				maxi = el;
			//	console.log(maxi);
		}
			
		});
			console.log(maxi);
		return maxi;
  }
  else {return undefined;}
}
findLongestWord(words);

//.toUpperCase()
//map use return and return an array of the same size
let carArray=["honda", "mercedes", "lexus", "nissan"]

carArray.map(car => {
  return car.toUpperCase();
})


// splice(start, deletecount)
//        start= start changing the array
//        deletecount =

let deletArray = ["cata", "pipe", "dani", "cristian"]
console.log(deletArray.splice(2,3))


// MAP examples
 let array = [1, 2, 3];

// The new array has the same number of elements as the original array
// BUT each element is mapped to the value*2

// ES5:
let newArray = array.map(function(number){
  return number * 2;
})



//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
  let arrayNumber = numbers.split(" ");
  // console.log(arrayNumber)
  let newArray = arrayNumber.map( value =>{
       return parseInt(value)
  })
  // ...
 let maxNumber = Math.max(...newArray);
  let minNumber =Math.min(...newArray);
  let both =+  maxNumber.toString()+ " "+ minNumber.toString()
  return both
}

//**********NOT WORKING******** */
//find the vowels on the string

function vowels(newvowel){
  
  let count = 0;
  for(i = 0; i <= newvowel; i++){
    console.log(newvowel[i])
     switch(newvowel[i]){
       case "a":
        count += 1;
        break;
       case "e":
        count += 1;
        break;
       case "i":
        count += 1;
        break;
       case "o": 
        count += 1;
        break;
       case "u":
       count += 1;
       break;
    }
  }
  return count;
}

vowels("paula")




//Given two integers a and b, 
//which can be positive or negative, 
//find the sum of all the numbers between 
//including them too and return it. 
//If the two numbers are equal return a or b.

//test 
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum(a,b){
  let sum =[];
  if(a === b){
   return a;
  }
  else if( a > b){
     for(i= b ; i <= a ; i++){
        sum.push(i)
    } 
    return sum.reduce(function (c,d) {return c + d})
  }
  else {
     for(i= a ; i <= b ; i++){
          sum.push(i)
      }
    return sum.reduce(function (c,d) {return c + d})
  }
  }


  ////// tree integer check if it is a trialagul

  function isTriangle(a,b,c)
{
   if ((a + b) > c && (a + c) > b && (b + c)> a){
        return true;
  }
   return false;



  /*Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

      Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

      Example:

      Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
      Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
      Note that the Java version expects a return value of null for an empty string or null. */

   String.prototype.toJadenCase = function (dato) {
    let inf= dato.split(" ");
    let lasdato=""
    inf.forEach(function(elem,index){
      lasdato += elem.charAt(0).toUpperCase() + elem.slice(1) + " ";
    });
    return lasdato;
    };
   
   String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real")
}

//************BEST SOLUTION */

    String.prototype.toJadenCase = function () { 
      return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" ");
    }


 /*findLastKey
Returns the last key that satisfies the provided testing function. Otherwise undefined is returned.

Use Object.keys(obj) to get all the properties of the object, Array.prototype.reverse() to reverse their order and Array.prototype.find() to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.

 */   

const findLastKey = (obj, fn) =>
Object.keys(obj)
  .reverse()
  .find(key => fn(obj[key], key, obj));
  findLastKey(
    {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true }
    },
    o => o['active']
  ); // 'pebbles'

/*______________________________________________________________
|           DATA STRUCTURE STACKS
|           POLINDROME
|     
|_______________________________________________________________*/

  
   function checkPolindromeWord(word){
     if (word.length == 0){
       return console.log("no word")
     }
     const letters=[]; 
     let rword="";
     // adding workd to the array
     for (let i=0; i< word.length; i++){
          letters.push(word[i]);
      }
    // concat the work in reverse
     for(let i=0;i< word.length; i++){
          rword += letters.pop()
     }
     if(rword === word){
       return console.log(word + "is a palindrom")
     }
     else {
       return console.log(word + " is not a palidrome")
     }
   }
  

   //***  stack object   */
//Create a stack
   let Stack = function(){
     this.count = 0;
     this.storage ={};
// add a value onto the end of the stack
     this.push = function(value){
       this.storage[this.count] = value;
       this.count++;
     }
// Removes and return the value at the end of the stack
    this.pop = function(){
      if(this.count === 0){
        return undefined;
      }
  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
  }
    this.size = function(){
      return this.count;
    }
//return the value at the end of the stack
    this.peek=function(){
      return this.storage[this.count-1];
    }
   }

 let myStack = new Stack();
 
 myStack.push(1);
 myStack.push(2);
 console.log(myStack.peek()); //2
 console.log(myStack.pop());  //2
 console.log(myStack.peek()); //1
/*______________________________________________________________
|           SET DATA STRUCTURE 
|           FIRST IN FIRST OUT
|     IT IS LIKE AN ARRAY EXPECT NO DUPLICATE ITEMS 
|     ITEM ARE IN NOT PARTICULAR ORDER
|     Particular use of Set: check for a present of and item
|     IIE 6 does not content all the methods of set
|_______________________________________________________________*/

 
 function mySet(){
   //holde the set
   let collection=[];
   //if the item is not in  the collection will return -1
   this.has = function(element){
     //if the element is not on the collection it will return -1 
     return (collection.indexOf(element) !== -1);
   }
   // this method will return all the values of the set
   this.values = function(){
     return collection;
   };
   // this method will add an element to the set
    this.add = function(element){
      if(!this.has(element)){
        collection.push(element);
        return true;
      }
      return false
    };
    //this method will remove an element from a set IIE delete()
    this.remove = function(element){
      if(this.has(element)){
        // find the index of the element
        index=collection.indexOf(element);
        // take out the element on the array and take out 1 element
        collection.splice(index,1);
        return true;
      }
      return false
    };
    // this method will return the size of the collection IIE is a property
    this.size = function(){
      return collection.length;
    };
//********************************************* */    
// no in the IIE implementation

    // this method will return the union of two sets
    //combine the set but remove the duplicates
    this.union = function(otherSet){
      let unionSet = new mySet();
      let firstSet = this.values();
      let secondSet = otherSet.value();
      firstSet.forEach(function(e){
        unionSet.add(e)
      });
      secondSet.forEach(function(e){
        unionSet.add(e)
      });
      return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    // return a new set 
    this.intersection = function(otherSet){
      let intersectionSet= new mySet();
      let firstSet = this.value();
      firstSet.forEach(function(e){
        if(otherSet.has(e)){
          intersectionSet.add(e)
        }
      })
      return intersectionSet;

    }

// this method will return the difference of the two sets as a new set
this.difference= function(otherSet){
  let differenceSet = new mySet();
  let firstSet = this.value();
  firstSet.forEach(function(e){
    if(!otherSet.has(e)){
       differenceSet.add(e)
    }
  });
  return differenceSet;
}

//this method will test if the set is a subset of a diffrente set
//retrun true of false

this.subset = function(otherSet){
  let firstSet = this.value();
  //whether all the elements in the array past the test implemented
  //by the provided function,
  // we are going to test all the element on first test to past this funcion

  return firstSet.every(function(value){
      return otherSet.has(value)
  });
};

 }

 let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("e");
console.log(setA.subset(setB)) // true
console.log(set)

/*______________________________________________________________
|           BINARY SEARCH TREE DATA STRUCTURE 
|          IS A WAY TO HOLD DATA WHEN VISUALIZE LOOK LIKE A TREE
|    ALL DATA POINT ON THE TREE ARE CALL NODES
|    THE TOP THE TREE IS THE ROOT AND FROM THERE IT BRANCHS OUT INTO 
|    ADDITIONAL NODES EACH OF MAY HAVE MORE NODES
|    LEAF NODE ARE NODES AT THE END OF THE TREE HAS NOT CHILDREN
|    ALSO EVERY CHILDREN HAS PARENT
|
|    A BINARY TREE CAN ONLY HAVE TWO BRANCES POR EVERY NODE
|    AND ALSO ARE ORDER EACH LEFTSUBTREE IS LESS OR EQUAL TO THE PARENT 
|    AND EACH RITHSUBTREE IS GREATER OR EQUAL TO THE PARENT NODE
|                           50
|                         /    \
|                       17      72  --> Left subtree is less or equal to the parent
|                     /   \     /  \
|                   12    23   54   76
|                  /  \  /  \  / \ 
|                9    14 19      67 
|_______________________________________________________________*/

// represent each node on the tree
class Node{
  constructor(data, left=null, right=null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
// binary search tree BST
class BST{
  constructor(){
    this.root = null;
  }


  add(data){
    const node = this.root;
    // if this is the first node
    if(node === null){
      this.root = new Node(data);
      return;
    }
    // where to place the new node
    //recursive function
    else{
      const searchTree= function(node){
        if(data < node.data){
            if(node.left === null){
              node.left = new Node(data);
              return;
            }else if (node.left !==null){
              return searchTree(node.left)
            }
          }else if(data> node.data){
              if(node.right = new Node(data)){
                node.right = new Node(data);
              return;
              }else if(node.right !== null){
              return searchTree(node.right);
            } 
          }else {
            return null;
          }
        }   
      return searchTree(node)
      }
    }


// findMin(){
//https://www.youtube.com/watch?v=t2CEgPsws3U
// }

}



// *********************
// Numeros primos

function printPrime4(value) {

    const primes = [];
    for(let i = 2; i < value; i++) {
        primes[i] = true;
      //  console.log("primer array", primes[i])
    }
    const limit = Math.sqrt(value);
      // console.log("este es limit", limit)
    for(let i = 2; i < limit; i++) {
      // console.log("segungo array" , primes[i])
        if(primes[i] === true) {
            for(let j = i * i; j < value; j += i) {
      // console.log("tercer array", primes[j])
                primes[j] = false;
            }
        }
    }
    for(let i = 2; i < value; i++) {
        if(primes[i] === true) {
            // console.log(i + " " + primes[i]);
        }
    }
}


// Get a decimal nunber 50 conver to binary number 110010
// return the invers number like                                 001101
// if it is 0 you renturn 1
// and return the decimal number after inverse it in this case is 13


function convert(n){
    let conver = n.toString(2).split('');
    // console.log(conver)
    let newArray="";
      for (let i = 0 ; i < conver.length ; i ++){
      // console.log(conver[i])
              if(conver[i] == "0"){
                   newArray += "1"
                }else { 
                   newArray += "0"
                } 
      }   
    return parseInt(newArray.replace(/[^01]/gi,'') , 2);
}




// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  let replacePosition = "";
  let newPhrase = "";
  const phrase=text.split("")
  // console.log(phrase)
  for(let i= 0; i<phrase.length ; i++){
     replacePosition = searchletter(phrase[i].toLowerCase());
     if (replacePosition != undefined) newPhrase += replacePosition + " ";
     
  }
   console.log(newPhrase.toString());
    return newPhrase.trim(); // to remove white spaces
  }
  
  
  function searchletter(letter){
    const alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(let i=0; i<= alpha.length ; i++) {
       
      if(alpha[i] == letter){
  //       console.log(alpha[i], i , letter)
        return i+1
        }
        
      }
      }

      // Best practice 
      function alphabetPosition(text) {
        return text
          .toUpperCase()
          .match(/[a-z]/gi)
          .map( (c) => c.charCodeAt() - 64)
          .join(' ');
      }



      //********************************************************* */
      //********************************************************* */
      /* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.*/
      
     function printerError(s) {
      let sum ="";
           sum=s.match(/[a-m]/gi).map((c) => c ) 
       return (s.length - sum.length )+"/" + s.length
      }