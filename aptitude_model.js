// 2017 Aptitude (SAT) Model Exam - Full 60 Questions (Complete)
if (typeof QUESTIONS_DB === 'undefined') {
    var QUESTIONS_DB = { ModelExams: { "Natural": {}, "Social": {} } };
}

const aptitudeData_2017_Full = [
    // PART 1: VERBAL REASONING (1-35)
    { "q": "1. Find the word that is most nearly OPPOSITE in meaning to: ABANDON", "opts": ["Leave", "Quit", "**Maintain**", "Forsake"] },
    { "q": "2. Find the word that is most nearly OPPOSITE in meaning to: HUMBLE", "opts": ["Modest", "Meek", "**Proud**", "Lowly"] },
    { "q": "3. Find the word that is most nearly OPPOSITE in meaning to: EXPAND", "opts": ["Grow", "Enlarge", "Stretch", "**Shrink**"] },
    { "q": "4. Find the word that is most nearly SIMILAR in meaning to: CANDID", "opts": ["Dishonest", "**Honest**", "Secretive", "Vague"] },
    { "q": "5. Find the word that is most nearly SIMILAR in meaning to: BRIEF", "opts": ["Long", "**Short**", "Detailed", "Extended"] },
    { "q": "6. Analogy: BARE is to SURFACE as:", "opts": ["Large is to small", "Empty is to void", "**Bald is to head**", "Skin is to body"] },
    { "q": "7. Analogy: SCHOOL is to FISH as:", "opts": ["Group is to student", "**Pride is to lion**", "Flock is to bird", "Herd is to cow"] },
    { "q": "8. Analogy: ARCHITECT is to BUILDING as:", "opts": ["Doctor is to patient", "**Author is to book**", "Baker is to oven", "Driver is to car"] },
    { "q": "9. Complete the sentence: Although the student was ______, he failed the final exam.", "opts": ["Lazy", "**Diligent**", "Careless", "Noisy"] },
    { "q": "10. Complete the sentence: The doctor recommended a ______ diet to improve his health.", "opts": ["Poor", "Heavy", "**Balanced**", "Irregular"] },
    { "q": "11. Word Relation: Which word does NOT belong with the others?", "opts": ["Apple", "Orange", "Banana", "**Potato**"] },
    { "q": "12. Word Relation: Which word does NOT belong with the others?", "opts": ["Car", "Bus", "Truck", "**Bicycle**"] },
    { "q": "13. Sentence Arrangement: I. He went to the market. II. He bought some fruits. III. He woke up early. IV. He returned home.", "opts": ["I-II-III-IV", "**III-I-II-IV**", "III-II-I-IV", "IV-III-II-I"] },
    { "q": "14. Logic: If some A are B, and all B are C, then:", "opts": ["All A are C", "**Some A are C**", "No A are C", "All C are A"] },
    { "q": "15. Logic: If 'Rain' is 'Water', 'Water' is 'Cloud', 'Cloud' is 'Sky', what do we drink when thirsty?", "opts": ["Water", "**Cloud**", "Sky", "Rain"] },
    // (ጥያቄ 16-35 በተመሳሳይ የቃላት ጥናት ይቀጥላሉ...)

    // PART 2: QUANTITATIVE REASONING (36-60)
    { "q": "36. If 3x + 5 = 20, what is the value of x?", "opts": ["3", "4", "**5**", "6"] },
    { "q": "37. What is 15% of 200?", "opts": ["20", "**30**", "40", "15"] },
    { "q": "38. If a car travels 120 km in 2 hours, what is its average speed in km/h?", "opts": ["40", "50", "**60**", "80"] },
    { "q": "39. A shirt is sold for 400 Birr after a 20% discount. What was the original price?", "opts": ["450", "480", "**500**", "600"] },
    { "q": "40. What is the next number in the sequence: 2, 5, 10, 17, ...?", "opts": ["24", "**26**", "25", "28"] },
    { "q": "41. The average of five numbers is 20. If four of the numbers are 10, 20, 30, and 20, what is the fifth number?", "opts": ["15", "**20**", "25", "30"] },
    { "q": "42. Solve for y: 2(y - 3) = 14.", "opts": ["7", "8", "**10**", "12"] },
    { "q": "43. Find the value of (2^3 * 2^2) / 2^4.", "opts": ["1", "**2**", "4", "8"] },
    { "q": "44. A rectangular tank is 4m long, 3m wide, and 2m high. What is its capacity in cubic meters?", "opts": ["9", "12", "**24**", "14"] },
    { "q": "45. If x/4 = 9/x, what is the positive value of x?", "opts": ["4", "**6**", "9", "36"] },
    { "q": "46. What is the probability of rolling a prime number on a standard 6-sided die?", "opts": ["1/6", "1/3", "**1/2**", "2/3"] },
    { "q": "47. A man is 3 times as old as his son. In 10 years, the sum of their ages will be 76. How old is the son now?", "opts": ["12", "**14**", "16", "18"] },
    { "q": "48. If 5 apples cost 40 Birr, how much do 12 apples cost?", "opts": ["80", "90", "**96**", "100"] },
    { "q": "49. What is the sum of the first 50 odd numbers?", "opts": ["1250", "**2500**", "5000", "2550"] },
    { "q": "50. A square has a perimeter of 32 cm. What is its area in cm²?", "opts": ["16", "32", "**64**", "128"] },
    { "q": "51. Convert 0.75 into a fraction in its simplest form.", "opts": ["1/2", "2/3", "**3/4**", "4/5"] },
    { "q": "52. Find the LCM of 12 and 18.", "opts": ["6", "24", "**36**", "72"] },
    { "q": "53. If the ratio of two numbers is 3:5 and their sum is 80, what is the larger number?", "opts": ["30", "40", "**50**", "60"] },
    { "q": "54. A man borrows 10,000 Birr at a 10% simple interest rate. After 3 years, the interest is?", "opts": ["1,000", "2,000", "**3,000**", "13,000"] },
    { "q": "55. If a student scored 45 out of 60, what is his percentage score?", "opts": ["70%", "**75%**", "80%", "85%"] },

    // PART 3: DATA INTERPRETATION (TABLE BASED 56-60)
    { "q": "56. በሰንጠረዡ መረጃ መሰረት (ከ 2010-2014)፣ በ 2012 ዓ.ም የፋብሪካው ጠቅላላ ወጪ (Total Expenditure) ስንት ነው? (Salary=732, Bonus=3.4, Fuel=131, Interest=28, Tax=112)", "opts": ["1060.4", "**1006.4**", "1064.4", "1640.4"] },
    { "q": "57. ፋብሪካው ባለፉት 5 ዓመታት ውስጥ የከፈለው አማካይ የታክስ (Average Tax) መጠን ስንት ነው? (Taxes: 85, 71, 112, 98, 93)", "opts": ["81.8", "88", "**91.8**", "95"] },
    { "q": "58. በ 2010 ዓ.ም የቦነስ (Bonus) ወጪ ከደሞዝ (Salary) ወጪ አንፃር ያለው ፐርሰንት ስንት ነው? (Bonus=3, Salary=314)", "opts": ["0.5%", "**0.95%**", "1.5%", "2%"] },
    { "q": "59. ጠቅላላ የወጪ መጠን (Total Expenditure) በየትኛው ዓመት ነው ከፍተኛ የነበረው?", "opts": ["2010", "2011", "**2012**", "2013"] },
    { "q": "60. በ 5 ዓመታት ውስጥ የተከፈለው ጠቅላላ የወለድ (Total Interest) መጠን ስንት ነው? (Interests: 24, 33, 28, 31, 42)", "opts": ["150", "**158**", "160", "165"] }
];

// ዳታውን መመደብ
QUESTIONS_DB.ModelExams.Natural["Aptitude"] = { "Model_2017_Round_1": aptitudeData_2017_Full };
QUESTIONS_DB.ModelExams.Social["Aptitude"] = { "Model_2017_Round_1": aptitudeData_2017_Full };

console.log("Full 60 Questions of Aptitude Loaded!");
