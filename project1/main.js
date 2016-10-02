					
					/*  Gidi A. Abadiga
					Inlämningsuppgift 1
					2016-09-18    */

	"use strict";

	//UPPGIFT 1
	//using boolean function
	console.log(5 * 2 < 12);
	console.log(55 > 22);
	console.log(16 / 4 == 4);
	console.log(8 + 2 != 128);
	console.log(32 * 8 > 255);

	//UPPGIFT 2
	//extracting parts using substring method
	//Uppgift 2.1 
	var str = "Tisdag";
	var extract = str.substring(0, 3);
	console.log(extract);
	//Uppgift 2.2  
	var str = 'Hamburgare';
	var extract = str.substring(3, 10);
	console.log(extract);
	//Uppgift 2.3
	var str = "I'll be back";
	var extract1 = str.substring(5);
	console.log(extract1);

	//UPPGIFT 3
	// combining substring and conversion methods
	//Uppgift 3.1
	var str = "It's Learning";
	var str2 = str.substring(5, 13).toUpperCase();
	console.log(str2);
	//Uppgift 3.2
	var str = "JavaScript: The Good Parts";
	var str2 = str.substring(16, 26).toLowerCase();
	console.log(str2);

	//UPPGIFT 4
	//sum, average and push methods on arrays
	//Uppgift 4.1
	var numbers = [128, 256, 512, 1024, 2048];
	var sumOfNumbers = numbers.reduce((a, x) => a += x, 0);
	console.log(sumOfNumbers);
	//Uppgift 4.2
	var numbers = [128, 256, 512, 1024, 2048];
	var sumOfNumbers = numbers.reduce((a, x) => a += x, 0);
	var avgNumber = sumOfNumbers / numbers.length;
	console.log(avgNumber);
	//Uppgift 4.3
	var numbers = [128, 256, 512, 1024, 2048];
	var sumOfNumbers = numbers.reduce((a, x) => a += x, 0);
	numbers.push(sumOfNumbers);
	console.log(numbers);

	//UPPGIFT 5
	/* Tried my best to find efficient ways/methods for manipulating strings in an array.
	   Couldn't find any. Please suggest better approaches*/
	//Uppgift 5.1
	var countries = ["Sweden", "Denmark", "Finland", "Norway"];
	var str = countries.toString();
	var str2 = str.slice(7, 10);
	console.log(str);
	console.log(str2);
	 
	//Uppgift 5.2
	var countries = ["Sweden", "Denmark", "Finland", "Norway"];
	var countries2 = countries.join("");
	var str = countries2.length;
	var avg = str/countries.length;
	console.log(avg);
	 


	//UPPGIFT 6
	//reversing array elements
	var values = [3, 5, "Jane", true, 144, false];
	values.reverse();
	console.log(values);

	//UPPGIFT 7
	//concatenation
	var names = ["jane", "Joe", "Eliza"];
	var ages = [21, 34, 22];
	var hasPet = [true, false, true];
	var multipleArrays = names.concat(ages, hasPet);
	console.log(multipleArrays);

	//UPPGIFT 8
	//joining array elements with hyphen
	var actors = ["Sherlock", "Watson", "Bo"];
	var combine = actors.join("-");
	console.log(combine);

	//UPPGIFT 9
	//if/else conditional with input from user
	var amount = prompt("Pick a random number", "0");
	if (amount < 50) console.log("Less than 50!");
	else if (amount < 65 && amount > 50) console.log("Optional range for amount!");
	else console.log("Too much!");

	//UPPGIFT 10
	//8 rounds incremental for loop		
	for (var hashtag = "#"; hashtag.length < 9; hashtag += "#") console.log(hashtag);



	/****************************END*************************************************/