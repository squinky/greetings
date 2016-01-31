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
		"#clearing.capitalize# your #ineffableAspect# of #unwantedThoughts#, #ritualCommand#.",
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
		"You are worthy of being called #regalTitle#.",
		"You will forever be #renowned# for your #positiveAttribute#.",
		"You will never be able to set foot in this establishment again."
	],
	"about":
	[
		"about", "concerning", "in relation to", "on the subject of", "on the topic of", "pursuant to", "regarding", "with regards to"
	],
	"aboutSomething":
	[
		"#about# the fall of the patriarchy", "#about# the state of the union", "#about# the weather", "#about# their day", "#about# their friends and family", "#about# their job",  "#about# their #wellBeing#", "#about# themself", "#about# your mutual acquaintance, who, by the way, says hi", "#about# yourself", "as \"#regalTitle#\"", "in a silly voice", "in your non-native language", "using only gestures and onomatopoeia", "with your hands"
	],
	"adjective":
	[
		"assertive", "audacious", "bashful", "blessed", "bold", "closed", "cordial", "cool", "decorative", "deft", "deep", "energetic", "enthusiastic", "firm", "flamboyant", "gentle", "hard", "impolite", "intense", "kind", "lively", "modest", "nonjudgemental", "open", "ostentatious", "polite", "profound", "practiced", "pure", "quick", "reluctant", "regal", "reserved", "rhythmic", "serious", "silent", "sincere", "skilled", "soft", "still", "sudden", "unabashed", "unreserved", "vigorous", "virile", "warm", "wholesome"
	],
	"adverb":
	[
		"bashfully", "boldly", "carefully", "cordially", "coolly", "deeply", "deftly", "enthusiastically", "firmly", "flamboyantly", "gently", "gingerly", "impolitely", "intensely", "kindly", "modestly", "ostentatiously", "politely", "profoundly", "quickly", "reluctantly", "regally", "reservedly", "rhythmically", "silently", "sincerely", "softly", "suddenly", "unabashedly", "unreservedly", "warmly"
	],
	"anointingObject":
	[
		"aerosol spray", "anti-perspirant", "box of baking soda", "box of tissues", "breathmint", "cup of coffee", "cup of green tea", "deodorant", "glass of water", "handful of flower petals", "medicated powder", "pair of sensible footwear", "perfume", "potpourri", "slice of cold pizza", "snack", "sock", "stack of index cards", "warm winter coat"
	],
	"blessing":
	[
		"curse word", "enchantment", "Gregorian chant", "haiku", "interpretive dance", "karaoke rendition of your favourite song", "oath", "obscure word", "offering", "Om", "orison", "poem", "prayer", "riverdance", "sacrifice", "secret", "semaphore pattern", "series of hand gestures", "sneeze", "song", "sonnet", "sun salutation", "wave of your hand", "yodel"
	],
	"bodyPart":
	[
		"#bodyPartSingle#", "#direction# #bodyPartPair#"
	],
	"bodyPartPair":
	[
		"ankle", "arm", "cheek", "elbow", "foot", "hand", "knee", "shoulder"
	],
	"bodyPartSingle":
	[
		"back", "chin", "forehead", "head", "nose", "stomach"
	],
	"clearing":
	[
		"cleansing", "clearing", "incinerating", "purifying", "ridding", "scrubbing"
	],
	"direction":
	[
		"left", "right"
	],
	"gesture":
	[
		"bow", "curtsy", "dance", "do the macarena", "do the twist", "do the wave", "gesticulate", "grimace", "hand jive", "hold out your hands", "incline", "jump", "lean", "nod", "patty-cake", "pirouette", "play air guitar", "play peekaboo", "point", "roll", "smile", "snap your fingers", "sneak", "stand on one leg", "step", "stick out your tongue", "turn", "undulate", "walk", "wave", "wiggle"
	],
	"greeting":
	[
		"Ahoy-hoy!", "Bonjour!", "Cheers!", "Fancy seeing you in this #currentLocation#!", "Good afternoon.", "Good day.", "Good evening.", "Good morning.", "Good night.", "Greetings!", "Hello!", "Hey there!", "Hi there!", "How do you do?", "Howdy!", "I expected you to be taller.", "I've known you since you were this big!", "Mars is bright tonight.", "My, how you've grown!", "Namaste.", "Oh hey!", "Oh, is that (partner's name)?", "Peace be upon you.", "Salutations!", "'Sup?", "This isn't where I parked my car...", "What's #person.a# like you doing in a #currentLocation# like this?", "Yo!", "You look different... did you get a haircut?", "You're looking well."
	],
	"greetingPhrase":
	[
		"#greeting#",
		"#greeting# #greeting#",
		"O #regalTitle#! #greeting#"
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
		"negative infinity", "negative one", "zero", "phi", "three", "pi", "five", "tau", "seven", "nine", "nine point five", "ten", "a baker's dozen", "nineteen", "twenty", "forty-two", "fifty", "sixty-nine", "ninety-nine", "one hundred", "one hundred and seven", "four hundred and twenty-nine", "six hundred and sixty-six", "seven hundred and seventy-seven", "eight hundred", "nine thousand", "a million", "two million", "a billion", "a trillion", "a quadrillion", "a zillion", "Avogadro's number", "a googolplex", "infinity", "two infinities", "the square root of negative one"
	],
	"person":
	[
		"adjunct professor", "alicorn", "astronaut", "award-winning recording artist", "baker", "ballerina", "barista", "blanket fort engineer", "butcher", "candlestick maker", "cobbler", "contortionist", "curator", "custodian", "debutante", "Disney princess", "escape artist", "first person narrator", "French philosopher", "game jammer", "heir to the bubblegum machine empire", "hero protagonist", "Imagineer", "independent filmmaker", "international person of mystery", "jewel thief", "juggler", "king", "kitten", "mediocre white man", "Mountie", "new media artist", "ninja turtle", "Nobel Prize winner", "noble hippopotamus", "non-player character", "nurse", "Olympic gold medalist", "pair of oxen", "pastry chef", "PhD student", "prince", "princess", "queen", "quing", "rocket scientist", "seamstress", "shaman", "shoemaker", "show pony", "software engineer", "spy master", "sushi chef", "tabletop roleplayer", "tailor", "teenager", "tenured professor", "toddler", "unicorn", "world champion"
	],
	"positiveAttribute":
	[
		"adeptness", "adroitness", "aptitude", "assertiveness", "attitude", "audacity", "bravery", "brilliance", "brutal honesty", "charisma", "compassion", "confidence", "constitution", "countenance", "courage", "curiosity", "dedication", "derring-do", "dexterity", "discipline", "flair", "flamboyance", "flourish", "fortitude", "gentleness", "honesty", "humility", "intellect", "je ne sais quoi", "joie de vivre", "jouissance", "leadership", "loving-kindness", "modesty", "nobility", "panache", "passion", "pizzazz", "prowess", "rancor", "restraint", "solipsism", "speed", "strength", "style", "tact", "technical skill", "wisdom", "zest"
	],
	"regalAdjective":
	[
		"chosen", "eminent", "esteemed", "famous", "godly", "noble", "prominent", "regal"
	],
	"regalTitle":
	[
		"#regalAdjective.capitalize# One", "Airbender", "Beyonce", "Captain", "Cher", "Chief", "Comrade", "Governor", "Grandmaster Flash", "Inigo Montoya", "Jedi Master", "Khaleesi", "King in the North", "Master Chief", "Mother of Dragons", "My Sun and Stars", "O Captain My Captain", "Pokemon Champion", "President", "Prime Minister", "Professor", "Sheriff", "Sith Lord", "Teacher", "Your Excellency", "Your Majesty"
	],
	"renowned":
	[
		"esteemed", "famous", "heralded", "infamous", "known", "notorious", "praised", "recognized", "remembered", "renowned"
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
