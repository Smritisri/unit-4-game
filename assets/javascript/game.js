$(document).ready(function(){//I need jQuery to run!
	var goal, current, redNumber, blueNumber, yellowNumber, greenNumber;

	var resetGame = function(){
		goal = Math.floor(Math.random()*101 + 19);
		current = 0;
		redNumber = Math.floor(Math.random()*12);
		blueNumber = Math.floor(Math.random()*12);
		yellowNumber = Math.floor(Math.random()*12);
		greenNumber = Math.floor(Math.random()*12);
	}

	resetGame();
 
	

	$("#button-red").attr('value', redNumber);
	$("#button-blue").attr('value', blueNumber);
	$("#button-yellow").attr('value', yellowNumber);
	$("#button-green").attr('value', greenNumber);


	$('.crystal-button').click(function(){
		current += parseInt($(this).attr('value'));
		console.log(current);
	});



});