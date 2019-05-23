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