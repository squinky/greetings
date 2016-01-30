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
		"#touch# your partner's #bodyPart# with your #bodyPart#",
		"#gesture# towards your partner",
		"cheek-kiss your partner #kissNumber# times, starting with the #direction# cheek"
	],
	"judgeFeedback":
	[
		"#judgeComments# #judgeScore#",
		"#judgeInterjection# #judgeComments# #judgeScore#",
		"#judgeComments# #judgeInterjection# #judgeScore#"
	],
	"judgeComments":
	[
		"#judgeInterjection# #judgeComments#",
		"#judgeComments# #judgeInterjection#",
		"The judges #judgeOpinion#.",
		"The judges #judgeOpinion# and #judgeOpinion#.",
		"The judges #judgeOpinion#, but #judgeOpinion#.",
		"While the judges #judgeOpinion#, they #judgeOpinion#."
	],
	"judgeOpinion":
	[
		"found you lacking in #positiveAttribute#",
		"sensed #unwantedThoughts# in your #ineffableAspect#",
		"were impressed by your #positiveAttribute#"
	],
	"judgeInterjection":
	[
		"Astounding!", "Aw yeah!", "Aww!", "Fantastic!", "Gadzooks!", "Goodness!", "Goodness gracious!", "Great Scott!", "Holy cats!", "How disappointing!", "No way!", "Oh dear!", "OMG!", "Quelle surprise!", "Shocking!", "Superb!", "Well I never!", "What a twist!", "What an upset!", "Zounds!"
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
		"#about# the weather", "#about# their #wellBeing#", "#about# themself", "#about# yourself", "as #regalTitle#"
	],
	"adjective":
	[
		"bashful", "blessed", "closed", "cordial", "cool", "deft", "deep", "enthusiastic", "firm", "gentle", "hard", "impolite", "intense", "kind", "nonjudgemental", "open", "polite", "profound", "reluctant", "regal", "reserved", "rhythmic", "silent", "sincere", "soft", "sudden", "unabashed", "unreserved", "vigorous", "warm"
	],
	"adverb":
	[
		"bashfully", "cordially", "coolly", "deeply", "enthusiastically", "firmly", "gently", "gingerly", "impolitely", "intensely", "kindly", "politely", "profoundly", "reluctantly", "regally", "reservedly", "rhythmically", "silently", "sincerely", "softly", "suddenly", "unabashedly", "unreservedly", "vigorously", "warmly"
	],
	"anointingObject":
	[
		"aerosol spray", "anti-perspirant", "box of baking soda", "box of tissues", "breathmint", "cup of coffee", "cup of green tea", "deodorant", "glass of water", "handful of flower petals", "medicated powder", "pair of sensible footwear", "perfume", "potpourri", "slice of cold pizza", "snack", "sock", "stack of index cards", "warm winter coat"
	],
	"blessing":
	[
		"curse word", "enchantment", "Gregorian chant", "haiku", "interpretive dance", "oath", "obscure word", "offering", "Om", "orison", "poem", "prayer", "riverdance", "sacrifice", "secret", "semaphore pattern", "series of hand gestures", "song", "sonnet", "sun salutation", "wave of your hand", "yodel"
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
	"gesture":
	[
		"bow", "curtsy", "gesticulate", "grimace", "incline", "jump", "lean", "nod", "pirouette", "play air guitar", "roll", "smile", "snap your fingers", "sneak", "stand on one leg", "step", "stick out your tongue", "turn", "undulate", "walk", "wave"
	],
	"greetingPhrase":
	[
		"Bonjour!", "Fancy seeing you in this #currentLocation#!", "Greetings!", "Hello!", "Hey there!", "Hi there!", "I've known you since you were this big!", "My, how you've grown!", "Namaste.", "Oh hey!", "Oh, is that [partner's name]?", "Salutations!", "'Sup?", "What's #person.a# like you doing in a #currentLocation# like this?", "Yo!"
	],
	"ineffableAspect":
	[
		"brain", "eyes", "heart", "mind", "nose", "secrets", "soul"
	],
	"kissNumber":
	[
		"two", "three", "three and a half"
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
		"caress", "fist bump", "hold", "nudge", "pat", "poke", "rub", "take", "tap", "tickle", "touch"
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
