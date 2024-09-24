alert("HEllo")

//fundamentals of JS

// Array 
var arr=[1,2,3,4]

// for each 
arr.forEach(function(val){
    console.log(val + " hello")
})  

//map

var ans = arr.map(function(val){
    return val + 12;
 }) 

 console.log(ans)


 //filter

var fil= arr.filter(function(val){
    if(val > 1){return true;}
    else return false
})

console.log("the filtered array is" , fil)

//find

var fin = arr.find(function(val){
    if(val === 3){return true;}
    
})

console.log(fin)

//index of
console.log(arr.indexOf(3))

//objects

var obj = {
    name:"Abhijay",
    age:20
}
//to not change later
Object.freeze(obj)

console.log(obj['name'])

//functions and return

function abc(){
    return 12
}

console.log(abc());