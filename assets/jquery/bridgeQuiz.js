// JavaScript Document

//Select Menu
$(document).ready(function() {
	$( "#menu1, #menu2, #menu3, #menu4, #menu5, #menu6, #menu7, #menu8, #menu9, #menu10, #menu11" ).selectmenu();
} );

//Button  
$(document).ready(function() {
	$('#fsubmit').button();
});

//Accordion
$(document).ready(function() {
    $( '#accordion' ).accordion({
		collapsible: true,
		active: true,
		heightStyle: "content",
		icons: { "header": "ui-icon-triangle-1-e", "activeHeader": "ui-icon-triangle-1-s" }	
	});
});
  

 //1. St. John's Bridge
 function fsubmit1(menu1Answer) {
 	var correctAnswer1 = 'St. John\'s Bridge';
	if (correctAnswer1 === menu1Answer) {
		alert('Correct! #1 is ' + correctAnswer1);
	}
	else {
		alert('Incorrect! #1 should be ' + correctAnswer1);
	}
 }
   
//2. Fremont Bridge
 function fsubmit2(menu2Answer) {
 	var correctAnswer2 = 'Fremont Bridge';
	if (correctAnswer2 === menu2Answer) {
		alert('Correct! #2 is ' + correctAnswer2);
	}
	else {
		alert('Incorrect! #2 should be ' + correctAnswer2);
	}
 };

//3. Broadway Bridge
 function fsubmit3(menu3Answer) {
 	var correctAnswer3 = 'Broadway Bridge';
	if (correctAnswer3 === menu3Answer) {
		alert('Correct! #3 is ' + correctAnswer3);
	}
	else {
		alert('Incorrect! #3 should be ' + correctAnswer3);
	}
 };

//4. Steele Bridge
 function fsubmit4(menu4Answer) {
 	var correctAnswer4 = 'Steele Bridge';
	if (correctAnswer4 === menu4Answer) {
		alert('Correct! #4 is ' + correctAnswer4);
	}
	else {
		alert('Incorrect! #4 should be ' + correctAnswer4);
	}
 };

//5. Burnside Bridge
 function fsubmit5(menu5Answer) {
 	var correctAnswer5 = 'Burnside Bridge';
		
	if (correctAnswer5 === menu5Answer) {		
		alert('Correct! #5 ' + correctAnswer5);
	}
	else {
		alert('Incorrect! #5 should be ' + correctAnswer5);
}
 };

//6. Morrison Bridge
 function fsubmit6(menu6Answer) {
 	var correctAnswer6 = 'Morrison Bridge';
		
	if (correctAnswer6 === menu6Answer) {
		alert('Correct! #6 ' + correctAnswer6);
	}
	else {
		alert('Incorrect! #6 should be ' + correctAnswer6);
	}
 };

//7. Hawthorne Bridge
 function fsubmit7(menu7Answer) {
 	var correctAnswer7 = 'Hawthorne Bridge';
		
	if (correctAnswer7 === menu7Answer) {
		alert('Correct! #7 ' + correctAnswer7);
	}
	else {
		alert('Incorrect! #7 should be ' + correctAnswer7);
	}
 };

//8. Marquam Bridge
 function fsubmit8(menu8Answer) {
 	var correctAnswer8 = 'Marquam Bridge';
		
	if (correctAnswer8 === menu8Answer) {
		alert('Correct! #8 ' + correctAnswer8);
	}
	else {
		alert('Incorrect! #8 should be ' + correctAnswer8);
	}
 };

//9. Tilikum Crossing
 function fsubmit9(menu9Answer) {
 	var correctAnswer9 = 'Tilikum Crossing';
		
	if (correctAnswer9 === menu9Answer) {
		alert('Correct! #9 ' + correctAnswer9);
	}
	else {
		alert('Incorrect! #9 should be ' + correctAnswer9);
	}
 };

//10. Ross Island Bridge
 function fsubmit10(menu10Answer) {
 	var correctAnswer10 = 'Ross Island Bridge';
		
	if (correctAnswer10 === menu10Answer) {
		alert('Correct! #10 ' + correctAnswer10);
	}
	else {
		alert('Incorrect! #10 should be ' + correctAnswer10);
	}
 };

//11. Sellwood Bridge
 function fsubmit11(menu11Answer) {
 	var correctAnswer11 = 'Sellwood Bridge';
		
	if (correctAnswer11 === menu11Answer) {
		alert('Correct! #11 ' + correctAnswer11);
	}
	else {
		alert('Incorrect! #11 should be ' + correctAnswer11);
	}
 };

var submitButton = document.getElementById('fsubmit'); 
submitButton.addEventListener('click', function() {
	var menu1Answer = document.getElementById('menu1').value;
	fsubmit1(menu1Answer);
	var menu2Answer = document.getElementById('menu2').value;
	fsubmit2(menu2Answer);
	var menu3Answer = document.getElementById('menu3').value;
	fsubmit3(menu3Answer);
	var menu4Answer = document.getElementById('menu4').value;
	fsubmit4(menu4Answer);
	var menu5Answer = document.getElementById('menu5').value;
	fsubmit5(menu5Answer);
	var menu6Answer = document.getElementById('menu6').value;
	fsubmit6(menu6Answer);
	var menu7Answer = document.getElementById('menu7').value;
	fsubmit7(menu7Answer);
	var menu8Answer = document.getElementById('menu8').value;
	fsubmit8(menu8Answer);
	var menu9Answer = document.getElementById('menu9').value;
	fsubmit9(menu9Answer);
	var menu10Answer = document.getElementById('menu10').value;
	fsubmit10(menu10Answer);
	var menu11Answer = document.getElementById('menu11').value;
	fsubmit11(menu11Answer);
});

