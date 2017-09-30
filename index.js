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
    //console.log("hi");
    /*
    *   Class Constructor
    *
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    //Person.call(this, firstName, lastName, id, scores);

    constructor(scores) {
        //this.firstName = firstName;
        //this.lastName = lastName;
        //this.idNumber = identification;
        //this.scores = scores;
        super(scores);
        //this.scores = scores;

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



    }// construc

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
