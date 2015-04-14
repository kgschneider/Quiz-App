var questions = ["Where was Haruki Murakami born?", "What is the name of Haruki Murakami's first novel?", "What is Haruki Murakami's favorite musical genre?", "What is Haruki Murakami's favorite hobby?", "What is the name of the coffeehouse that Haruki Murakami once owned?"];
var answers = ["Kyoto", "Hear the Wing Sing", "Jazz", "Running", "The Peter Cat"];
var opt1 = ["Kobe", "Hear the Wing Sing", "Classical", "Playing guitar", "McSorley's"];
var opt2 = ["Tokyo", "1Q84", "Hip Hop", "Running", "The Coffeee Bean"];
var opt3 = ["Osaka", "A Wild Sheep Chase", "Jazz", "Chess", "Starbucks"];
var opt4 = ["Kyoto", "Norwegian Wood", "Rock", "Knitting", "Haruki's Coffee"];

var counter = 0;
var score = 0;


$(document).ready(function() {

	$("#question").text(questions[0]);
	$("#answer1").append(opt1[0]);
	$("#answer2").append(opt2[0]);
	$("#answer3").append(opt3[0]);
	$("#answer4").append(opt4[0]);

	$('#submit').click(function() {

		if (answers[0] === opt1[0]) {
			score++;
			console.log(score);
		}

		counter++;
		console.log(counter);

		$("#question").text(questions[counter]);
		$("#correctanswer").text(answers[counter - 1]);


	});
})

