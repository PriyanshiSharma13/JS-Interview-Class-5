console.log("hello");

// Q1. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button.

const buttonOne = document.querySelector("#buttonOne");
const firstHeading = document.querySelector("#firstHeading");

buttonOne.addEventListener("click",function(){
    firstHeading.innerText = "Mern Stack";
})

//------------------------------------------------------------------------------------------------------------------------------------------

//  Q2. Write code to get 1st H1 element from a webpage using DOM.

document.querySelector("h1");

//------------------------------------------------------------------------------------------------------------------------------------------

//  Q3. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.

function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var amPm = "AM";

    if(hours>12){
        amPm.innerText = "PM";
    }
    else{
        amPm = "AM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let currentTime = hours + ":" + mins + ":" + secs + ":" + amPm;
    document.querySelector("#timer").innerHTML = currentTime;
}
setInterval(showTime,1000);
showTime();
//------------------------------------------------------------------------------------------------------------------------------------------


//  Q4. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy".


const buttonTwo = document.querySelector("#buttonTwo");
const para = document.querySelector("#text");

buttonTwo.addEventListener("click",function(){
    para.innerText = "Welcome to Elevation academy";
})

//------------------------------------------------------------------------------------------------------------------------------------------

//  Q5. Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text.

$("#hidebtn").click(function(){
    $("#text1").hide();
});
$("#showbtn").click(function(){
    $("#text1").show();
});

//------------------------------------------------------------------------------------------------------------------------------------------

//  Q6. Given an array of 0's and 1's find out number of 0's

let arr1 = [ 1,1,1,0,0,1,1,0,0,1]
let arr2 = arr1.filter( x => x == 0);
console.log(arr2.length);

//------------------------------------------------------------------------------------------------------------------------------------------

//  Q7. Given an array find out total no. of odd and even nos.

let arr3 = [2,4,6,8,1,3,84,47,52,53]
let arr4 = arr3.filter(x => x % 2 === 0 );
console.log("even",arr4.length);
console.log("odd",arr3.length - arr4.length);

//------------------------------------------------------------------------------------------------------------------------------------------


//  Q8. Given a string find out number of vowels.

let str1 = "jhfhrjghjdbjbvjdaeiou";
function vowelCount(str1) {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str1.length; i++) {
    if (vowel.includes(str1[i])) {
      count++;
    }
  }
  console.log(count);
}
vowelCount(str1);

//--------------------------------------------------------------------------------------------------------------------

//  Q9. Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.

let ob1 = {
  name1: "Steve",
  favNum: [2,4,6,8],
}

let ob2 = {
  name2: "Smith",
  favNum: [2,4,6,8],
}

function checkEle(ob1, ob2){ 
  let res = 0;
    for (let i = 0; i <ob1.favNum.length; i++) {  
      if (ob1.favNum.includes(ob2.favNum[i])){
        res++;
      }
      else{    
        console.log("Data is not same");  
      }} 
      if(res == ob1.favNum.length){
        console.log("All the elements in both arrays are same");
      } 
    } 
checkEle(ob1, ob2);
