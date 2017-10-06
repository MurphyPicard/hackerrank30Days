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

// Day 25
// function processData(input) {
//     var inArray = input.split("\n");
//     //console.log(inArray);
//
//     for(var i = 1; i < inArray.length; i++ ){
//         var verified = false;
//         var start = 2;
//
//         while (start <= Math.sqrt(inArray[i])) {
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
//         }
//
//
//
//     }//for
//
//     //Enter your code here
// }
