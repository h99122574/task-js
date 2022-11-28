//  IIFE    SEF    Encapsulation    


var allProducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var total_price=document.querySelector(".total_price")

var totalPrice = 0 ;
allProducts.forEach( function (item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += item.textContent + " , ";
        if (content.innerHTML != "" ){
            btn.style.display = "block";
            // btn.style.backgroundColor = "red";
            // btn.style.color = "white";
        }
    

    }
})
btn.onclick = function (){
    // console.log(totalPrice)
    total_price.innerHTML=totalPrice;

    if (total_price.innerHTML != "" ){
        total_price.style.display = "block";
       
    }

}

/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////

// JSON     Javascript Object Notation 
// 1
// 2 
// 3 
// API   


//  var  res = [
//     {
//         name : "ahmed",
//         age : "30",
//         city : "mansoura"
//     },
//     {
//         name : "fatma",
//         age : "19",
//         city : "cairo"
//     },
//     {
//         name : "sajda",
//         age : "26",
//         city : "egypt"
//     }
//  ]

//  console.log(res)
// console.log(typeof res)

// document.getElementById("div1").innerHTML = res;

var x = JSON.stringify(res)

// document.getElementById("div1").innerHTML = x ;

// console.log( typeof x )
var y = JSON.parse (x)

// document.getElementById("div1").innerHTML =y  ;

var z = JSON.stringify (y)

document.getElementById("div1").innerHTML =z  ;
////////////////////////////////////////////////////////////////////


