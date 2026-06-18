// english_model.js - 100 English Model Questions for Natural & Social Streams

if (typeof QUESTIONS_DB === 'undefined') {
    var QUESTIONS_DB = {};
}

if (!QUESTIONS_DB.ModelExams) QUESTIONS_DB.ModelExams = {};
if (!QUESTIONS_DB.ModelExams.Natural) QUESTIONS_DB.ModelExams.Natural = {};
if (!QUESTIONS_DB.ModelExams.Social) QUESTIONS_DB.ModelExams.Social = {};

const english_2017_data = [
    {
        "q": "\"I am writing the letter to inform to you about the poor service provided by your company. The network you have provided was not working properly and it always caused a fluctuation which resulted in dropping...\"\nThis is likely taken from a letter of:",
        "opts": ["**complaining letter**", "sells letter", "recommendation letter", "Inquiry letter"]
    },
    {
        "q": "\"I would like to be consider as a candidate for the assistance computer programmer position in Addis Zemen \"on May 8, 2022. I'm currently finishing my degree in computer science at Haromya University...",
        "opts": ["letter of request", "**job application letter**", "complain letter", "recommendation letter"]
    },
    {
        "q": "\"I had the pleasure of teaching Genet in 11th grade honors English class at Bole Preparatory School...\"",
        "opts": ["**recommendation letter**", "apologized letter", "sells letter", "inquiry letter"]
    },
    {
        "q": "1. One day he met a very beautiful girl in London.\n2. He took money from the rich and gave it to the poor.\n3. Robin Hood is a legendary hero.\n4. Her father wanted to marry her to a rich old man.\n5. He lived in the 12th century.",
        "opts": ["5, 4, 2, 1, 3", "3, 4, 2, 1, 5", "1, 4, 2, 5, 3", "**3, 5, 2, 1, 4**"]
    },
    {
        "q": "Rearrange:\n1. Our director's speech was very interesting.\n2. He said that our younger generation had to study hard.\n3. He spoke about the most important tasks of our school.\n4. Last week we held a meeting at our school.\n5. Our meeting was addressed by our director and some of the teachers.",
        "opts": ["5, 1, 2, 4, 3", "**4, 5, 1, 3, 2**", "4, 5, 3, 2, 1", "1, 4, 2, 3, 5"]
    },
    {
        "q": "Rearrange paragraph about American agriculture:\n1. Much of them are exported.\n2. In the Middle West very much grain is grown.\n3. American agriculture produces more food products than any other capitalist country.\n4. Poultry - farming and vegetable - growing are concentrated in the country-side near all the big cities.\n5. Fresh fruit and vegetables come all the year round from the southern regions...\n6. The highlands in the west of the country are famous for their cattle-farming.",
        "opts": ["1, 3, 2, 4, 6, 5", "6, 5, 4, 1, 2, 3", "**3, 1, 2, 5, 4, 6**", "1, 2, 6, 5, 4, 3"]
    },
    {
        "q": "Rearrange sentences about London:\n1. London is on the river Thames.\n2. It has more than 9 million people.\n3. London is the capital of England.\n4. It is one of the largest cities in the world.\n5. Great Britain is a densely populated country.",
        "opts": ["1, 3, 4, 5, 2", "3, 4, 2, 5, 1", "2, 1, 3, 4, 5", "**5, 3, 4, 1, 2**"]
    },
    {
        "q": "Which sentence is punctuated correctly?",
        "opts": ["**What a lovely view you have here!**", "What a lovely view you have here?", "what a lovely view you have here.", "What a lovely view you have here"]
    },
    {
        "q": "Identify the correctly punctuated sentence:",
        "opts": ["**Johnny went to the park, and Lisa went to the beach because it was nice outside.**", "Johnny went to the park: and Lisa went to the beach...", "johnny went to the park; and Lisa went to the beach...", "Johnny went to the park and Lisa went to the beach..."]
    },
    {
        "q": "Which is the correct punctuation for the indirect question?",
        "opts": ["She asked, \"If I like playing table tennis?\"", "**She asked me if I like playing table tennis.**", "She asked me if I like playing table tennis.", "She asked me if I like playing table tennis?"]
    },
    {
        "q": "She realised the danger she had been in only after she had read the newspaper the following morning.",
        "opts": ["**She hadn't been aware of the danger she was in until she read the newspaper.**", "When she read the newspaper, she found herself in a danger...", "Although she was aware of the danger, she didn't get frightened.", "She realized what kind of dangers one might have had..."]
    },
    {
        "q": "Because of his innocent face, it is difficult even today to believe he was criminal although it had been certainly proven.",
        "opts": ["**Despite the fact that he was proven to be a criminal, his innocent face makes it difficult to believe that.**", "If it had been proven that he was guilty...", "It doesn't necessary mean that criminals can't have an innocent look.", "It is really surprising how he hurt somebody."]
    },
    {
        "q": "The only member of the cat family that can roar lions, leopards, tigers and jaguars but lions are by far the loudest.",
        "opts": ["Like leopards, tigers, and jaguars, lions are among the members...", "Since lions come from the same cat family...", "**Lions, leopards, tigers, and jaguars are the only four cats that can roar; however, the others can't roar as loudly as lions do.**", "Lions, leopards, tigers, and jaguars can roar, however the roar of lion is not as frightening"]
    },
    {
        "q": "After failing a doping test at the Seoul Olympics, Ben Johnson was stripped of his gold medal.",
        "opts": ["At the Seoul Olympics Ben Johnson and many others were disqualified...", "**If Ben Johnson hadn't been tested positive for doping at the Seoul Olympics; he wouldn't have lost his gold medal.**", "since Ben Johnson confessed having used doping...", "Although Ben Johnson failed the doping test, he wasn't disqualified..."]
    },
    {
        "q": "Today there is hardly any time for storytelling in homes, whereas it was a life style in the past.",
        "opts": ["Unlike in the past, in our modern world, time is scarcest value...", "Today hardly anyone knows how important storytelling was in the past...", "**Storytelling, which once was a vital part of life, has become significantly less common in the modern era due to lack of time.**", "Nowadays, storytelling has become a very important practice..."]
    },
    {
        "q": "W/o Momina is a **hot tempered** woman. She quarrels with all her customers.",
        "opts": ["kind", "**easily angered**", "trouble maker", "has high body temperature"]
    },
    {
        "q": "Grazmach Dejene is an **innocent** man. You can drag him easily in to unwanted acts.",
        "opts": ["He doesn't know much about time.", "**He is naive/gullible.**", "He is illiterate.", "He is mad."]
    },
    {
        "q": "Dawit is a **reckless** driver. He has many accident records.",
        "opts": ["Un reasonable fast", "slow", "**careless**", "troublesome"]
    },
    {
        "q": "The woman is **miser**. She even asks for coin.",
        "opts": ["**greedy/stingy**", "generous", "reasonable fast", "drunken"]
    },
    {
        "q": "Ato Demelash is an **industrious** lecture. He is always in his office in the evening.",
        "opts": ["jealous", "**hard working**", "food loving", "easily gets tired"]
    },
    {
        "q": "His **eloquent** speech impressed the audience.",
        "opts": ["**fluent and appealing**", "unattractive", "disorganized", "inaudible"]
    },
    {
        "q": "If you were attacked by malaria, it **relapses** when you feel cold.",
        "opts": ["**begins a fresh**", "diminished re-attacks", "cures", "goes away"]
    },
    {
        "q": "COVID 19 has reached an **epidemic** proportion.",
        "opts": ["not widely spread", "rarely seen", "**widely spread**", "not spread in all places"]
    },
    {
        "q": "(Reading) The idea of flying an aircraft was ______ to some people.",
        "opts": ["Boring", "distasteful", "**exciting**", "needless"]
    },
    {
        "q": "(Reading) People thought that the Wright brothers had ______",
        "opts": ["acted without thinking", "been negatively influenced", "been too cautious", "**been mistaken**"]
    },
    {
        "q": "(Reading) The Wrights' interest in flight grew into a ______",
        "opts": ["financial empire", "plan", "**need to act**", "foolish thought"]
    },
    {
        "q": "(Reading) Lilienthal's idea about controlling airborne vehicles was ______ the Wrights.",
        "opts": ["proven wrong by", "opposite to the ideas of", "disliked by", "**accepted by**"]
    },
    {
        "q": "(Reading) The old tables were ______ and replaced by the first reliable figures for air pressure.",
        "opts": ["Destroyed", "**invalidated**", "multiplied", "approved"]
    },
    {
        "q": "(Reading) The Wrights designed and built their own source of ______",
        "opts": ["**force for moving forward**", "force for turning around", "turning", "force for going backward"]
    },
    {
        "q": "Kate: I've never played cops and robbers. How do you play it? ... Kate: ______",
        "opts": ["You'll be at the police station.", "Work in a group of four.", "Continue the game until someone catches you.", "**Well, will you show me what to do?**"]
    },
    {
        "q": "A: Why are you so tired? B: ______ A: Who helped you? B: ______",
        "opts": ["**I've just worked hard / nobody did**", "I worked much / you'll help me", "So I am tired / many friends did", "I prefer walking / my mother did"]
    },
    {
        "q": "A: Who will you go to the country with? B: ______ A: What about your children? B: ______",
        "opts": ["I'll go with my children. / They like sea", "My sister will join me. / He is at home.", "I've just come. / They prefer to go with me.", "**I'll go alone. / They are away.**"]
    },
    {
        "q": "Mary: Did you pass your exam? Ann: ______ Mary: Was it difficult? Ann: ______",
        "opts": ["No, I haven't / I don't know", "**Yes, I did / I don't think it was**", "Of course, it was / I'm sorry", "It's a pity / Nice to see you"]
    },
    {
        "q": "A: Would you like a cup of tea? B: ______ A: Would you like it with milk and sugar? B: ______",
        "opts": ["No, thank you / with lemon", "With pleasure / not at all", "It's a pity / I have a nice weekend", "**Yes, please / little sugar, no milk**"]
    },
    {
        "q": "Lemelem: Do you know how to make pizza? Kalkidan: ______",
        "opts": ["It is easy.", "**Yes. I can.**", "No, I don't.", "I don't like pizza."]
    },
    {
        "q": "Teacher: What kinds of websites are very popular? Student: ______",
        "opts": ["Many people like to them.", "Popular people use twitter most often.", "They are famous in many countries.", "**Take for example face book and twitter.**"]
    },
    {
        "q": "Tura: Would you mind lending me your bicycle? Guta: (positive response) ______",
        "opts": ["Yes, I would", "**No, I wouldn't**", "No, I would", "Yes, I wouldn't"]
    },
    {
        "q": "X: I think school head teachers should expel students who cheat. Y: ______",
        "opts": ["I don't think so. Everybody cheats.", "I don't agree with you. In my opinion head teachers suspend them.", "You are right. Students who cheat always intimidate younger students.", "**I agree with you but many students don't know what they are doing wrong.**"]
    },
    {
        "q": "Martha: What is the best way to enjoy school? Moges: Get good marks... Martha: ______ Moges: Yes, we feel alone otherwise.",
        "opts": ["**What about friends?**", "Are they enough?", "And doing homework of course.", "And not play truant."]
    },
    {
        "q": "X: ______ Y: we have eight a day. They are 40 minutes long.",
        "opts": ["Are there foreign students in your school?", "How many days are there in a week?", "How far is your school to your house?", "**How many lessons do you have every day?**"]
    },
    {
        "q": "Tutor: What is your favorite subject? Student: English. Tutor: ______ Student: Yes, but I like doing homework.",
        "opts": ["**Does your English teacher give much homework?**", "Did you do your homework?", "How much homework does your teacher give?", "Do you like other subjects?"]
    },
    {
        "q": "Belachew: ...I don't go to school, I live at school. Anwar: ______ Belachew: Yes it is.",
        "opts": ["**Is it a boarding school?**", "Is it funny?", "Is your house near your school?", "why do always smile?"]
    },
    {
        "q": "Jane: Would you like some more cake? Mike: ______",
        "opts": ["Yes, ice cream please.", "No, I've already caught it.", "Please take a piece of cake.", "**Thanks, I haven't eaten my first piece yet.**"]
    },
    {
        "q": "Haile: I was told an interesting story yesterday. Tirusew: ______",
        "opts": ["Neither was he.", "Were they?", "Didn't you?", "**So were we**"]
    },
    {
        "q": "Selam: By the way, I have two books of yours... Seba: Have you finished reading them? Selam: ______",
        "opts": ["All right, I'll read it again...", "**Yes, and enjoyed them very much, especially the one about Liberia.**", "Of course, I thought it was time I paid a visit.", "I haven't free time. I'll bring it next time."]
    },
    {
        "q": "Woman: \"Do you think she is better, doctor?\" Doctor: ______ Woman: I am very glad to hear that.",
        "opts": ["She was all right.", "She has been good.", "**She'll be all right in a day or two.**", "She has a bad illness."]
    },
    {
        "q": "Mubarek: What are they? Bereket: ______",
        "opts": ["**They are famous sportsmen.**", "The man is a famous writer.", "They are Pete and Mike.", "This man is John Smith."]
    },
    {
        "q": "Begashaw: I'm flying to New-York tomorrow. Tizitaw: ______",
        "opts": ["**Have a good journey!**", "A happy landing to you!", "You're welcome!", "Help yourself"]
    },
    {
        "q": "Samson: ...We would have a splendid time if ______?",
        "opts": ["Yes, it is / Right you are / we should go there", "Yes, it has / Nice! / the weather is fine", "Well / O.K. / we go there", "**Yes, it's raining cats and dogs / It's a pity / the weather were fine.**"]
    },
    {
        "q": "Demoz: ...let's go and see Kate. She is ill. Degu: _____. Demoz: When will you be free? Degu: _____.",
        "opts": ["I can. I'm free now / Tomorrow", "**I can't. I'm busy now / In 2 hours**", "O.K. / I'm busy", "All right / Certainly"]
    },
    {
        "q": "Doctor: Take this medicine... Patient: ________________________ Doctor: Are you sure?",
        "opts": ["What shall I do if unexpected side effects arise?", "What is the ideal dosage for my weight?", "No, it is too early to prescribe another medicine.", "**But I have used it before and it didn’t help it at all.**"]
    },
    {
        "q": "Filimon: My parents don’t give me enough pocket money. Kibrom: _____________________________ Filimon: No, they are not.",
        "opts": ["Do they have enough money?", "Do your parents work?", "Did they know that your pocket money is not enough?", "**Are they a bit mean?**"]
    },
    {
        "q": "Until he won a great amount of money from the lottery, he had been living in ______ for more than 30 years.",
        "opts": ["vacancy", "welfare", "**poverty**", "temptation"]
    },
    {
        "q": "If you are late the meeting, it will be really difficult to ________ the subjects which have been discussed.",
        "opts": ["look for", "play down", "drop in", "**catch up with**"]
    },
    {
        "q": "You can take out a ____ from the bank with a law interest rate if you are willing to buy a car.",
        "opts": ["**loan**", "progress", "request", "interest"]
    },
    {
        "q": "Because thousands of people die of AIDS every year, ___ research has been done worldwide to find a cure.",
        "opts": ["bitter", "previous", "**extensive**", "fluent"]
    },
    {
        "q": "Today, people have to pay a certain amount of fee to ______ the internet.",
        "opts": ["reduce", "**access**", "emerge", "occur"]
    },
    {
        "q": "The newspaper reports that the team heroic effort to ____ the crew of the sinking ship.",
        "opts": ["exceed", "**rescue**", "attend", "launch"]
    },
    {
        "q": "It was possible that many more passengers could have ________ , but the ship didn’t have enough lifeboats.",
        "opts": ["**survived**", "vanished", "challenged", "displayed"]
    },
    {
        "q": "About seventy per cent of Earth’s surface is covered by water, which is _______ to life.",
        "opts": ["modest", "accurate", "**essential**", "reliable"]
    },
    {
        "q": "(Reading - Social Media) Being an active participant in social media is a great way to:",
        "opts": ["meet new people", "increase your social circle", "learn new things", "**Stay connected to life**"]
    },
    {
        "q": "(Reading) In today’s world, social media has become a _______ for us.",
        "opts": ["**necessity**", "luxury", "backbone", "support"]
    },
    {
        "q": "(Reading) Which of the following is not a social media platform?",
        "opts": ["Facebook", "Instagram", "**Google**", "Twitter"]
    },
    {
        "q": "(Reading) Choose an option that is a synonym of the word ‘fortify’",
        "opts": ["barricade", "**strengthen**", "improve", "boost"]
    },
    {
        "q": "(Reading) For whom is the ability to communicate overseas very convenient?",
        "opts": ["**Those that live away from their families**", "Those that have connections overseas", "Those that travel to foreign lands", "Those that do business in foreign lands."]
    },
    {
        "q": "(Reading) Which is a good site to look at if you’re trying to create a professional network?",
        "opts": ["Twitter", "Gmail", "**LinkedIn**", "Facebook"]
    },
    {
        "q": "(Reading) One of the major benefits of social media is that:",
        "opts": ["you can see what is happening all over the world.", "you can connect with people all over the world for free", "**You can talk to people far away from you easily.**", "You can connect with people you have never met before."]
    },
    {
        "q": "(Reading) Which of the following is not a feature of social media?",
        "opts": ["Social media will enhance your life.", "Social media comes in handy if you have friends abroad.", "**Social media is the way that news is spread, even if it is not heard this way.**", "Keeping a well maintains network helps successful life"]
    },
    {
        "q": "(Reading) Which of the following is an appropriate title for the passage?",
        "opts": ["The Beneficial Social Media", "Social Media – A Necessary", "Importance of Staying Connected Through Social Media", "**The Revolution of the Whole World around the Social Media**"]
    },
    {
        "q": "(Reading) Using social media for a company is:",
        "opts": ["very cost-effective", "time efficient", "very profitable", "**A & B**"]
    },
    {
        "q": "(Reading) Meaning of the word ‘enhance’:",
        "opts": ["**Further improve the quality or value of something**", "Highlights a quality that was being ignored", "Understand the true value of something", "Something that empowers you."]
    },
    {
        "q": "I’m quite sure that I put my phone on my desk, now that it’s not there somebody ______ it.",
        "opts": ["might have taken", "**must have taken**", "will have taken", "will take"]
    },
    {
        "q": "It was __________ beautiful painting ________ she decided to hang it in the living room.",
        "opts": ["such…that", "so…that", "**such a …that**", "too…to"]
    },
    {
        "q": "They wish they _________ so much chocolate. They’re feeling very sick now.",
        "opts": ["wouldn’t eat", "didn’t eat", "**hadn’t eaten**", "haven’t eaten"]
    },
    {
        "q": "The ducks ________ eggs in their nests every morning.",
        "opts": ["lie", "**lay**", "have lain", "have lied"]
    },
    {
        "q": "This doesn’t look a very nice restaurant. Can we go _____ else?",
        "opts": ["**Somewhere**", "anywhere", "nowhere", "everywhere"]
    },
    {
        "q": "I’ve known Henok for years. He went to the same school _____ I did.",
        "opts": ["liked", "so", "like", "**as**"]
    },
    {
        "q": "Give me Peter’s letter. If I _____ him, I _____ it to him.",
        "opts": ["**see-will give**", "meet-would visit", "saw-would give", "had seen- would give"]
    },
    {
        "q": "If I ________ the news, I _______ in 20/80 condominium.",
        "opts": ["**had listened/would have registered**", "had listen/ would have registered", "listen/would registers", "listened/ would have registered"]
    },
    {
        "q": "The sun was shining... She looked at her car but it was not there. Somebody ____ it.",
        "opts": ["has stolen", "have stolen", "**had stolen**", "stole"]
    },
    {
        "q": "The study also mentions two other cities, _________ Singapore and Shanghai.",
        "opts": ["**namely**", "in other words", "to be accurate", "for instance"]
    },
    {
        "q": "Let’s _______ that old box. We don’t need it.",
        "opts": ["**throw away**", "throw in", "throw on", "throw of"]
    },
    {
        "q": "The game played on a table with a green cover and holes round the edge is ______. ",
        "opts": ["**Snooker**", "bowling", "boxing", "darts"]
    },
    {
        "q": "I _____ to be _____ artist when I _____ a child.",
        "opts": ["**wanted / an / was**", "wants / an / was", "want / a / was", "to want / an / is"]
    },
    {
        "q": "We use adverbs _____ the beginning and the end of a sentence, but sometimes _____ the middle.",
        "opts": ["**at / in**", "in / at", "on / at", "at / on"]
    },
    {
        "q": "While I _____ this morning, I _____ my money.",
        "opts": ["shopped / lose", "shopped / was losing", "**was shopping / lost**", "shop / lose"]
    },
    {
        "q": "Bahir Dar is a very _____ city. A lot of people go there on honeymoon.",
        "opts": ["dirty", "polluted", "wealthy", "**romantic**"]
    },
    {
        "q": "Thieves _____ two pictures from the museum last night.",
        "opts": ["have stolen", "**stole**", "was stolen", "had stolen"]
    },
    {
        "q": "Poor people from rural areas are migrating to the cities to find work and _____ the circles of slum housing are growing.",
        "opts": ["**consequently**", "however", "as", "whereas"]
    },
    {
        "q": "I resemble my father, ____?",
        "opts": ["do I", "**don’t I**", "did I", "didn’t I"]
    },
    {
        "q": "I really don’t know ______ he doesn’t come to such an important meeting.",
        "opts": ["how", "when", "**why**", "where"]
    },
    {
        "q": "______ fiction improves your English language.",
        "opts": ["Read", "Having read", "If you read", "**Reading**"]
    },
    {
        "q": "Foreigner: Was there a radio? You: No. we _____ by the use of Masinko or Azimari?",
        "opts": ["Use to dance", "used to danced", "use to dance", "**used to dance**"]
    },
    {
        "q": "Gebre spoke ______ to the audience... He knew he had a ____ chance of winning.",
        "opts": ["confident/good", "confidently/well", "**confidently/good**", "confident/well"]
    },
    {
        "q": "My mother, __________ grades are excellent, has been sent for scholarship.",
        "opts": ["who", "that", "**whose**", "which"]
    },
    {
        "q": "The number of people living in the area _________ too large for its infrastructure.",
        "opts": ["**has become**", "have become", "become", "are become"]
    },
    {
        "q": "There was a fire last night in our block, but everyone __________ escape from the building.",
        "opts": ["could", "can", "have been able to", "**was able to**"]
    },
    {
        "q": "I remember ________ him about the meeting, so I am surprised that he did not attend.",
        "opts": ["**telling**", "tell", "to tell", "told"]
    },
    {
        "q": "When I travel to England next year I ____ English for over four years.",
        "opts": ["will study", "will be studying", "have studied", "**will have studied**"]
    },
    {
        "q": "Direct speech, “I broke the window.” Indirect: She admitted _________ the window.",
        "opts": ["to break", "**breaking**", "breaks", "broken"]
    }
];

// ለሁለቱም እንዲሰራ (Natural እና Social)
QUESTIONS_DB.ModelExams.Natural.English = { "2017_Model": english_2017_data };
QUESTIONS_DB.ModelExams.Social.English = { "2017_Model": english_2017_data };

console.log("100 English questions loaded for Natural & Social streams!");

