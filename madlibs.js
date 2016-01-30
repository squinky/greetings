var madlibs =
{
	"ritualInstructions":
	[
		"#[currentLocation:#locationAdj# #location#]ritualSteps#"
	],
	"ritualSteps":
	[
		"Here are your instructions:\
		<ol>\
		<li>#ritualStep#</li>\
		<li>#ritualStep#</li>\
		<li>#ritualStep#</li>\
		<li>#ritualStep#</li>\
		<li>#ritualStep#</li>\
		<li>#ritualStep#</li>\
		<li>#ritualStep#</li>\
		</ol>"
	],
	"ritualStep":
	[
		"#ritualCommand.capitalize#.",
		"Clearing your #ineffableAspect# of #unwantedThoughts#, #ritualCommand#.",
		"With #adjective.a# #bodyPart#, #ritualCommand#.",
		"With #positiveAttribute#, #ritualCommand#.",
		"Anoint yourself with #anointingObject.a#.",
		"Bless the #currentLocation# you are in with #blessing.a#."
	],
	"ritualCommand":
	[
		"#speakTo# your partner #aboutSomething#",
		"#adverb# #touch# your partner's #bodyPart#",
		"gaze #adverb# into your partner's #ineffableAspect#",
		"say \"#greetingPhrase#\" to your partner",
		"#touch# your partner's #bodyPart# with your #bodyPart#"
	],
	"judgeFeedback":
	[
		"#judgeComments# #judgeScore#"
	],
	"judgeComments":
	[
		"The judges #judgeOpinion#.",
		"The judges #judgeOpinion#, but #judgeOpinion#.",
		"While the judges #judgeOpinion#, they #judgeOpinion#."
	],
	"judgeOpinion":
	[
		"found you lacking in #positiveAttribute#",
		"sensed #unwantedThoughts# in your #ineffableAspect#",
		"were impressed by your #positiveAttribute#"
	],
	"judgeScore":
	[
		"You have been awarded #number# out of #number# points.",
		"You have scored #number# out of #number#.",
		"Your score is #number# out of #number#."
	],
	"about":
	[
		"about", "regarding"
	],
	"aboutSomething":
	[
		"#about# the weather", "#about# their #wellBeing#", "#about# themself", "as #regalTitle#"
	],
	"adjective":
	[
		"blessed", "closed", "deft", "firm", "gentle", "hard", "kind", "nonjudgemental", "open", "polite", "sincere", "soft"
	],
	"adverb":
	[
		"bashfully", "cordially", "coolly", "deeply", "enthusiastically", "firmly", "gently", "gingerly", "impolitely", "intensely", "kindly", "politely", "profoundly", "reluctantly", "regally", "reservedly", "rhythmically", "silently", "sincerely", "softly", "suddenly", "unabashedly", "unreservedly", "vigorously", "warmly"
	],
	"anointingObject":
	[
		"aerosol spray", "anti-perspirant", "box of baking soda", "breathmint", "cup of coffee", "deodorant", "glass of water", "handful of flower petals", "medicated powder", "perfume", "potpourri"
	],
	"blessing":
	[
		"Gregorian chant", "interpretive dance", "Om", "prayer", "sun salutation", "song", "yodel"
	],
	"bodyPart":
	[
		"#bodyPartSingle#", "#direction# #bodyPartPair#"
	],
	"bodyPartPair":
	[
		"cheek", "hand", "shoulder"
	],
	"bodyPartSingle":
	[
		"forehead", "head", "neck", "nose"
	],
	"direction":
	[
		"left", "right"
	],
	"greetingPhrase":
	[
		"Bonjour!", "Fancy seeing you in this #currentLocation#!", "Greetings!", "Hello!", "Hey there!", "Hi there!", "I've known you since you were this big!", "My, how you've grown!", "Namaste.", "Oh hey!", "Oh, is that [partner's name]?", "Salutations!", "'Sup?", "What's #person.a# like you doing in a #currentLocation# like this?", "Yo!"
	],
	"ineffableAspect":
	[
		"brain", "eyes", "heart", "mind", "nose", "secrets", "soul"
	],
	"location":
	[
		"academy", "agora", "altar", "antechamber", "auditorium", "blanket fort", "cafeteria", "cavern", "chamber", "church", "classroom", "clearing", "dais", "desert highway", "discotheque", "dojo", "dome", "domicile", "dwelling", "field", "holodeck", "hotel", "intersection", "labyrinth", "lobby", "meadow", "place of worship", "platform", "restaurant", "school", "spaceship", "stadium", "stage", "stairwell", "street", "teleconference room", "vestibule", "washroom"
	],
	"locationAdj":
	[
		"cavernous", "chaotic", "classy", "claustrophobic", "cozy", "crowded", "echoing", "fancy", "fragrant", "large", "lonely", "small", "smelly", "very serious"
	],
	"number":
	[
		"negative infinity", "negative one", "zero", "three", "pi", "five", "seven", "nine", "nineteen", "forty-two", "one hundred and seven", "four hundred and twenty-nine", "nine thousand", "a million", "infinity", "two infinities", "the square root of negative one"
	],
	"person":
	[
		"#adjective# person", "award-winning recording artist", "baker", "blanket fort engineer", "butcher", "candlestick maker", "game jammer", "heir to the bubblegum machine empire", "international person of mystery", "Olympic gold medalist", "shoemaker", "spy master", "tabletop roleplayer"
	],
	"positiveAttribute":
	[
		"adeptness", "adroitness", "aptitude", "attitude", "audacity", "bravery", "brutal honesty", "charisma", "constitution", "courage", "dedication", "derring-do", "dexterity", "fortitude", "gentleness", "honesty", "intellect", "je ne sais quoi", "leadership", "panache", "prowess", "rancor", "solipsism", "speed", "strength", "style", "tact", "wisdom"
	],
	"regalAdjective":
	[
		"chosen", "esteemed", "famous"
	],
	"regalTitle":
	[
		"#person.a#", "#regalAdjective.capitalize# One", "Grandmaster Flash", "O [partner's name]", "Professor", "Teacher", "Your Excellency"
	],
	"speakTo":
	[
		"address", "ask something of", "reveal something to", "speak to", "talk to", "tell something to"
	],
	"touch":
	[
		"caress", "hold", "nudge", "pat", "poke", "rub", "take", "tap", "tickle", "touch"
	],
	"unwantedThoughts":
	[
		"anger", "doubt", "embarrassment", "envy", "hatred", "jealousy", "judgement", "unwanted thoughts"
	],
	"wellBeing":
	[
		"happiness", "health", "well-being"
	]
}
