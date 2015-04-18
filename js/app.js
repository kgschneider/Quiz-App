var questions = ["Where was Haruki Murakami born?", "What is the name of Haruki Murakami's first novel?", "What is Haruki Murakami's favorite musical genre?", "What is Haruki Murakami's favorite hobby?", "What is the name of the coffeehouse that Haruki Murakami once owned?"];
var answers = ["Kyoto", "Hear the Wing Sing", "Jazz", "Running", "The Peter Cat"];
var opt1 = ["Kobe", "Hear the Wing Sing", "Classical", "Playing guitar", "McSorley's"];
var opt2 = ["Tokyo", "1Q84", "Hip Hop", "Running", "The Coffee Bean"];
var opt3 = ["Osaka", "A Wild Sheep Chase", "Jazz", "Chess", "Starbucks"];
var opt4 = ["Kyoto", "Norwegian Wood", "Rock", "Knitting", "The Peter Cat"];

var counter = 0;
var score = 0;
var x = 1;

function displayQuestions(number) {
	$("#question").text(questions[number]);
	$("#answer1").html(opt1[number]);
	$('#rb1').val(opt1[number]).attr('checked',false);
	
	$("#answer2").html(opt2[number]);
	$('#rb2').val(opt2[number]).attr('checked',false);
	
	$("#answer3").html(opt3[number]);
	$('#rb3').val(opt3[number]).attr('checked',false);

	$("#answer4").html(opt4[number]);
	$('#rb4').val(opt4[number]).attr('checked',false);

	$("#question").text(questions[number]); //remove this if needed
	$("#correctanswer").text(answers[number - 1]); //remove this if needed, switch out num for counter
}

function gameOver(number) {
	if (number >= 5) {
		alert("You got " + score + " out of 5 correct!" + " Please refresh the page to play again.");
		$('#submit').attr("disabled",true);
		$('#submit').html("game over");
	}
}




$(document).ready(function() {

	displayQuestions(counter);


	$('#submit').click(function() {

		var selectedAnswer = $('input[name="a"]:checked').val();

		if (answers[counter] === selectedAnswer) {
			score++;
			console.log(score);
		}
		else if (selectedAnswer === undefined) {
			alert('Please select an answer!');
			return;
		}

		if (x == 1) {
			$('#q1').css("background", "#007F00");
		}
		else if (x == 2) {
			$('#q2').css("background", "#007F00");
		}
		else if (x == 3) {
			$('#q3').css("background", "#007F00");
		}
		else if (x == 4) {
			$('#q4').css("background", "#007F00");
		}
		else if (x == 5) {
			$('#q5').css("background", "#007F00");
		}

		x++;
		counter++;
		displayQuestions(counter);
		console.log(counter);

		gameOver(counter);


	});
})

