var TITLE_SCREEN = 0;
var INTRO_SPIEL_SCREEN = 1;
var INSTRUCTIONS_SCREEN = 2;
var FEEDBACK_SCREEN = 3;
var NUM_STEPS = 7;
var currentScreen;
var grammar;

function setCurrentScreen(s)
{
	if (s == TITLE_SCREEN)
	{
		$("#titleScreen").show();
		$("#introSpielScreen").hide();
		$("#instructionsScreen").hide();
		$("#feedbackScreen").hide();
		$("#timer").hide();
		
		$("#gongText").text("Sound the gong to start.");
		
		$('#timerText').stopwatch({format: '{M}:{ss}'}).stopwatch('reset');
		$('#timerText').text("0:00");
	}
	if (s == INTRO_SPIEL_SCREEN)
	{
		$("#titleScreen").hide();
		$("#introSpielScreen").show();
		$("#instructionsScreen").hide();
		$("#feedbackScreen").hide();
		$("#timer").hide();
		
		$("#gongText").text("When you are ready, sound the gong.");
	}
	if (s == INSTRUCTIONS_SCREEN)
	{
		$("#titleScreen").hide();
		$("#introSpielScreen").hide();
		$("#instructionsScreen").show();
		$("#feedbackScreen").hide();
		$("#timer").show();
		
		$("#gongText").text("When you are finished, sound the gong.");
		
		$('#timerText').stopwatch({format: '{M}:{ss}'}).stopwatch('start');
		
		$("#steps").html(grammar.flatten("#ritualInstructions#"));
	}
	if (s == FEEDBACK_SCREEN)
	{
		$("#titleScreen").hide();
		$("#introSpielScreen").hide();
		$("#instructionsScreen").hide();
		$("#feedbackScreen").show();
		$("#timer").show();
		
		$("#gongText").text("Sound the gong to restart.");
		
		$('#timerText').stopwatch({format: '{M}:{ss}'}).stopwatch('stop');
		
		$("#feedback").html(grammar.flatten("#judgeFeedback#"));
	}
	currentScreen = s;
}

function cycleCurrentScreen()
{
	var audio = $("#gongSound")[0];
	audio.load();
	audio.play();
	
	if (currentScreen == FEEDBACK_SCREEN) setCurrentScreen(TITLE_SCREEN);
	else setCurrentScreen(currentScreen+1);
}

KeyboardController({ 32: function() { cycleCurrentScreen(); } }, 2000);
$("#gong").click(function() { cycleCurrentScreen(); });

$(document).ready(function()
{
	setCurrentScreen(TITLE_SCREEN);
	setTimeout(function() { grammar = tracery.createGrammar(madlibs); }, 10);
});
