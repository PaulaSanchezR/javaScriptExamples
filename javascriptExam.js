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
}