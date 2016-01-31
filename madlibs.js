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
		"With the #positiveAttribute# of #person.a#, #ritualCommand#."
	],
	"ritualCommand":
	[
		"#speakTo# your partner #aboutSomething#",
		"#adverb# #touch# your partner's #bodyPart#",
		"gaze #adverb# into your partner's #ineffableAspect#",
		"say \"#greetingPhrase#\" to your partner",
		"#touch# your partner's #bodyPart# with your #bodyPart#",
		"#gesture# towards your partner",
		"cheek-kiss your partner #kissNumber# times, starting with the #direction# cheek",
		"anoint yourself with #anointingObject.a#",
		"bless the #currentLocation# you are in with #blessing.a#"
	],
	"judgeFeedback":
	[
		"#judgeComments# #judgeScore# #judgeConclusion#",
		"#judgeInterjection# #judgeComments# #judgeScore# #judgeConclusion#",
		"#judgeComments# #judgeInterjection# #judgeScore# #judgeConclusion#"
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
	"judgeConclusion":
	[
		"You are a disgrace to every #person#.",
		"You are the most #adjective# #person# to ever set foot in this establishment.",
		"You are truly #adjective#.",
		"You will forever be renowned for your #positiveAttribute#.",
		"You will never be able to set foot in this establishment again."
	],
	"about":
	[
		"about", "on the subject of", "regarding", "with regards to"
	],
	"aboutSomething":
	[
		"#about# the weather", "#about# their day", "#about# their friends and family", "#about# their job",  "#about# their #wellBeing#", "#about# themself", "#about# your mutual acquaintance, who, by the way, says hi", "#about# yourself", "as #regalTitle#"
	],
	"adjective":
	[
		"assertive", "audacious", "bashful", "blessed", "bold", "closed", "cordial", "cool", "decorative", "deft", "deep", "energetic", "enthusiastic", "firm", "flamboyant", "gentle", "hard", "impolite", "intense", "kind", "lively", "modest", "nonjudgemental", "open", "ostentatious", "polite", "profound", "practiced", "pure", "quick", "reluctant", "regal", "reserved", "rhythmic", "serious", "silent", "sincere", "skilled", "soft", "still", "sudden", "unabashed", "unreserved", "vigorous", "virile", "warm", "wholesome"
	],
	"adverb":
	[
		"bashfully", "boldly", "carefully", "cordially", "coolly", "deeply", "deftly", "enthusiastically", "firmly", "flamboyantly", "gently", "gingerly", "impolitely", "intensely", "kindly", "modestly", "ostentatiously", "politely", "profoundly", "quickly", "reluctantly", "regally", "reservedly", "rhythmically", "silently", "sincerely", "softly", "suddenly", "unabashedly", "unreservedly", "vigorously", "warmly"
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
		"ankle", "arm", "cheek", "elbow", "foot", "hand", "knee", "leg", "shoulder"
	],
	"bodyPartSingle":
	[
		"back", "chest", "chin", "forehead", "head", "neck", "nose", "stomach"
	],
	"direction":
	[
		"left", "right"
	],
	"gesture":
	[
		"bow", "curtsy", "dance", "gesticulate", "grimace", "incline", "jump", "lean", "nod", "pirouette", "play air guitar", "point", "roll", "smile", "snap your fingers", "sneak", "stand on one leg", "step", "stick out your tongue", "turn", "undulate", "walk", "wave", "wiggle"
	],
	"greetingPhrase":
	[
		"Bonjour!", "Fancy seeing you in this #currentLocation#!", "Greetings!", "Hello!", "Hey there!", "Hi there!", "I've known you since you were this big!", "My, how you've grown!", "Namaste.", "Oh hey!", "Oh, is that (partner's name)?", "Salutations!", "'Sup?", "What's #person.a# like you doing in a #currentLocation# like this?", "Yo!"
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
		"adjunct professor", "award-winning recording artist", "baker", "ballerina", "blanket fort engineer", "butcher", "candlestick maker", "cobbler", "debutante", "French philosopher", "game jammer", "heir to the bubblegum machine empire", "international person of mystery", "jewel thief", "king", "mediocre white man", "new media artist", "Olympic gold medalist", "pastry chef", "PhD student", "prince", "princess", "queen", "quing", "shoemaker", "software engineer", "spy master", "sushi chef", "tabletop roleplayer", "tenured professor"
	],
	"positiveAttribute":
	[
		"adeptness", "adroitness", "aptitude", "assertiveness", "attitude", "audacity", "bravery", "brilliance", "brutal honesty", "charisma", "compassion", "confidence", "constitution", "countenance", "courage", "curiosity", "dedication", "derring-do", "dexterity", "discipline", "flair", "flamboyance", "flourish", "fortitude", "gentleness", "honesty", "humility", "intellect", "je ne sais quoi", "joie de vivre", "leadership", "loving-kindness", "modesty", "panache", "passion", "pizzazz", "prowess", "rancor", "restraint", "solipsism", "speed", "strength", "style", "tact", "technical skill", "wisdom", "zest"
	],
	"regalAdjective":
	[
		"chosen", "eminent", "esteemed", "famous", "godly", "prominent", "regal"
	],
	"regalTitle":
	[
		"#person.a#", "#regalAdjective.capitalize# One", "Grandmaster Flash", "O (partner's name)", "Professor", "Teacher", "Your Excellency"
	],
	"speakTo":
	[
		"address", "ask something of", "reveal something to", "speak to", "talk to", "tell something to"
	],
	"touch":
	[
		"caress", "fist bump", "hold", "nudge", "pat", "poke", "rub", "shake", "stroke", "take", "tap", "tickle", "touch"
	],
	"unwantedThoughts":
	[
		"anger", "avarice", "darkness", "despair", "doubt", "embarrassment", "envy", "evil", "gluttony", "greed", "hatred", "impure thoughts", "jealousy", "judgement", "pride", "sloth", "unwanted thoughts", "wrath"
	],
	"wellBeing":
	[
		"happiness", "health", "well-being"
	]
}
