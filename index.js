// Day 0
// console.log("Hello, World.");

// Day 1
// console.log(parseInt(input_stdin_array[0]) + i);
//
//
// var d1 = parseFloat(input_stdin_array[1]) + parseFloat(d);
// if( d1.toString().length == 1 )
// {
//    console.log(d1 + ".0");
// }
// else
// {
//     console.log(d1);
// }
//
//
// console.log(s + input_stdin_array[2]);

// Day 2, 3, 5, 6, 7, 8, 9, 10, 11
// my code disappeared :(
// I'll save future challenges before I click next

// Day 4
// function Person(initialAge){
//
//     if( initialAge<0 ){
//         console.log('Age is not valid, setting age to 0.');
//         this.age = 0;
//     }
//     else if( initialAge <= 30 ){
//         this.age = initialAge;
//     }
//
//     this.amIOld=function(){
//       if(this.age < 13){
//           console.log("You are young.");
//       }
//       else if(this.age < 18){
//           console.log('You are a teenager.');
//       }
//       else{
//       console.log("You are old.");
//       }
//     };
//
//     this.yearPasses=function(){
//       this.age += 1;
//     };
// }//person

// Day 12
class Student extends Person {

    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification);
        this.scores = scores;
    }// construc

    this.calculate = function(scores){

        var total = 0;
        scores.forEach(function(score){
            total += score;
        });

        var avg = total/scores.length;
        if(avg < 990){
            console.log('progress!');
        return 'p';
        }//if
    }//calc





    /*
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */

}//student
/*
function SuperHero (name, superPower) {
    this.name = name;
    this.superPower = superPower;
    this.allegiance = "Good";
}

SuperHero.prototype.saveTheDay = function () {
    console.log(this.name + " saved the day!");
};

var marvel = new SuperHero("Captain Marvel", "magic");

// Outputs: "Captain Marvel saved the day!"
marvel.saveTheDay();
*/






// DAY 13 ************************************************************************
// class MyBook extends Book {
// // Declare your class here.
//     constructor(title, author, price){
//         super(title, author);
//         this.price = price;
//     }
//     /**
//     *   Class Constructor
//     *
//     *   @param title The book's title.
//     *   @param author The book's author.
//     *   @param price The book's price.
//     **/
//     // Write your constructor here
//     display(){
//         console.log("Title: "+ this.title);
//         console.log("Author: "+ this.author);
//         console.log("Price: "+ this.price);
//     }
//     /**
//     *   Method Name: display
//     *
//     *   Print the title, author, and price in the specified format.
//     **/
//     // Write your method here
//
// // End class
// }

// Day 15
// this.insert=function(head,data){
//
//         //console.log("this is head: ",typeof head);
//         //console.log("this is data: ",data);
//         //console.log("this is input_stdin_array: ",input_stdin_array);
//
//
//
//         if(head == null){
//             return new Node(data);
//         }
//         var cnode = head;
//         while(cnode.next){
//             cnode = cnode.next;
//         }
//         cnode.next = new Node(data);
//         return head;
//
//
//
//
//     //complete this method
//     };


// Day 16
// function main() {
//
//     var S = readLine();
//
//     try {
//         console.log( eval(S) );
//     }
//     catch(S){
//         console.log("Bad String");
//     }
//
// }

// Day 17 - done - hackerRank wanted throw specifically
// class Calculator{
//     power (n,p){
//         try {
//             if((n>=0) && (p>=0)){
//                 throw(Math.pow(n, p));
//             }
//             else{
//                 throw "n and p should be non-negative";
//             }
//         }//try
//         catch(err) {
//             throw(err);
//         }//catch
//     }//power
// }//Calculator

// DAY 18
// function Solution(){
//     this.que=[];
//     this.stack = [];
//
//     this.pushCharacter = function (a){
//         this.stack.push(a);
//     }
//
//     this.enqueueCharacter = function (b){
//         this.que.push(b);
//     }
//
//     this.popCharacter = function(){
//         return this.stack.pop();
//
//     }
//
//     this.dequeueCharacter = function(){
//         return this.que.shift();
//     }
// }

// //Day 19 - must do in Java
// class Calculator implements AdvancedArithmetic {
//     public int divisorSum ( int n ){
//         int total = 0;
//
//         int i = 1;
//         while(i <= n/2){
//             if ( n % i == 0 ){
//                 total += i;
//             }
//             i++;
//         }//while
//         total += n;
//         return total;
//     }//divi
// }//Calc

// Day 25
// function processData(input) {
//
//     var inArray = input.split("\n");
//     //console.log(inArray);
//
//     for(var i = 1; i < inArray.length; i++ ){
//         var verified = false; // so we know if we checked the number already
//         var start = 2;
//
//         if(inArray[i]<2){  // checks for theh number 1
//            console.log("Not prime");
//            verified = true;
//         }
//
//         while (start <= Math.sqrt(inArray[i])){
//             if (inArray[i] % start++ < 1){
//                 //console.log(inArray[i]);
//                 console.log("Not prime");
//                 verified = true;
//                 break;
//             }//if
//         }//while
//
//         if(verified == false){
//             //console.log(inArray[i]);
//             console.log("Prime");
//         }//if
//
//     }//for
// }//processData



// Day 26
// I thought I might need to add parseInt in a few places
// function processData(input) {
//     var twoDates = input.split("\n");
//     var actual = twoDates[0].split(" ");
//     var expected = twoDates[1].split(" ");
//     //console.log(expected);
//
//     var fine = 0;
//
//     // if year is late
//     if( actual[2] > expected[2] ){
//         fine = 10000;
//         console.log(fine);
//         return;
//     }
//
//     // if month is late
//     if( actual[2] == expected[2] ){
//         if( parseInt(actual[1]) > parseInt(expected[1]) ){
//             fine = (actual[1]-expected[1]) * 500;
//             console.log(fine);
//             return;
//         }
//     }
//
//     // if day is late
//     if( actual[2] == expected[2] ){
//         if( actual[1] == expected[1] ){
//             if( actual[0] > expected[0] ){
//                 fine = (actual[0]-expected[0]) * 15;
//                 console.log(fine);
//                 return;
//             }
//         }
//     }
//
//     console.log(fine);
// }
//
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//    processData(_input);
// });


// Day 27 is sooooooo stupid - just console.log valid input for the tests
// console.log(5);
// console.log("4 3");
// console.log("-1 0 4 2");
// console.log("6 1");
// console.log("-2 -4 -5 0 3 4");
// console.log("5 3");
// console.log("0 -1 5 6 7");
// console.log("3 2");
// console.log("-9 0 10");
// console.log("7 6");
// console.log("-9 -8 -7 0 9 10 11");

//Day 28: RegEx, Patterns, and Intro to Databases
// function main() {
//     var N = parseInt(readLine());
//     var na = []; // stands for names array
//     for(var a0 = 0; a0 < N; a0++){
//
//         var firstName_temp = readLine().split(' ');
//         var firstName = firstName_temp[0];
//         var emailID = firstName_temp[1];
//
//         if(emailID.slice(-10) == "@gmail.com"){
//             na.push(firstName);
//         }//if
//
//     }//for
//
//     console.log(na.sort().join('\n'));
// }

// Day 29 passing one test so far
// function main() {
//     var t = parseInt(readLine());
//     var nandk = []; // n and k array
//     for(var a0 = 0; a0 < t; a0++){
//         var n_temp = readLine().split(' ');
//         var n = parseInt(n_temp[0]);
//         var k = parseInt(n_temp[1]);
//         nandk.push(n); // set of numbers goes from 1 to n
//         nandk.push(k); //can't be bigger than this
//     }//for
//
//     //console.log(nandk);
//
//     for(var nindex = 0; nindex < nandk.length; nindex+=2){
//         //console.log('new test');
//         var big = 0;
//
//         for(var i = 1; i < nandk[nindex]; i++){                 // looping through A's
//             for(var j = i+1; j < nandk[nindex] + 1; j++){       // looping through B's
//                 var currentNum = i&j;                           // getting the BITWISE &
//                 if(currentNum >= big && currentNum < nandk[nindex +1]){
//                     big = currentNum;
//                 }
//             }//for
//         }//for
//
//         console.log(big); // instead of return
//     }//for
// }//main
