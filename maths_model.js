// maths_model.js

// ዳታቤዙ መኖሩን ማረጋገጥ
if (typeof QUESTIONS_DB === 'undefined') {
    var QUESTIONS_DB = {};
}

// ለሞዴል ኤግዛም አስፈላጊ የሆኑ ሳጥኖችን ማዘጋጀት
if (!QUESTIONS_DB.ModelExams) QUESTIONS_DB.ModelExams = { Natural: {}, Social: {} };
if (!QUESTIONS_DB.ModelExams.Natural) QUESTIONS_DB.ModelExams.Natural = {};
if (!QUESTIONS_DB.ModelExams.Social) QUESTIONS_DB.ModelExams.Social = {};

// የጥያቄዎቹ ዝርዝር (በአንድ ተለዋዋጭ ተቀምጧል)
const mathsModelData = [
    {
        "q": "Which of the following is a rational number?",
        "opts": ["√3", "π", "**0.333...**", "e"]
    },
    {
        "q": "For any set A, which of the following is always true?",
        "opts": ["A ⊆ {}", "**{} ⊆ A**", "A ∈ {}", "{} ∈ A"]
    },
    {
        "q": "If A = {1, 2} and B = {3, 4}, what is A × B?",
        "opts": ["{1, 2, 3, 4}", "{(1, 3), (2, 4)}", "{(3, 1), (4, 2)}", "**{(1, 3), (1, 4), (2, 3), (2, 4)}**"]
    },
    {
        "q": "What is the instantaneous rate of change of f(x) = 12x² + 8x at x = -3?",
        "opts": ["80", "-80", "64", "**-64**"]
    },
    {
        "q": "What is the necessary condition for a function to have an inverse?",
        "opts": ["Onto", "One-to-one", "**Both**", "Either"]
    },
    {
        "q": "According to the IVT, if f(a) > 0 and f(b) < 0 on [a, b], then:",
        "opts": ["f(c) > 0", "f(c) < 0", "**f(c) = 0**", "No such c exists"]
    },
    {
        "q": "The graphs of y = eˣ and y = ln(x) are symmetric with respect to:",
        "opts": ["x-axis", "y-axis", "origin", "**y = x**"]
    },
    {
        "q": "In a rational function, a horizontal asymptote occurs when:",
        "opts": ["deg(num) > deg(den)", "**deg(num) < deg(den)**", "crosses x-axis", "is polynomial"]
    },
    {
        "q": "What is the domain of the tangent function?",
        "opts": ["All R", "**R \\ {odd multiples of π/2}**", "R \\ {multiples of π}", "[-1, 1]"]
    },
    {
        "q": "Which is always true about similar figures?",
        "opts": ["Same area", "Same perimeter", "**Same shape**", "Same size"]
    },
    {
        "q": "What can be said about interior angles of a regular polygon?",
        "opts": ["**Always > 90°**", "Always < 90°", "Sometimes both", "None"]
    },
    {
        "q": "The product of one secant and its external part is:",
        "opts": ["**Equal to the other**", "Greater", "Less", "Proportional"]
    },
    {
        "q": "What is the fractional form of 0.56 (recurring)?",
        "opts": ["56/9", "56/7", "**56/99**", "81/8"]
    },
    {
        "q": "Point (x, y) dividing (x1, y1) and (x2, y2) in ratio m:n:",
        "opts": ["((mx1+nx2)/(m+n), (my1+ny2)/(m+n))", "**((mx2+nx1)/(m+n), (my2+ny1)/(m+n))**", "Minus version", "(x2-x1) version"]
    },
    {
        "q": "Two lines are coincident if:",
        "opts": ["Same slope, diff intercept", "**Same slope, same intercept**", "Diff slope, same intercept", "Diff both"]
    },
    {
        "q": "Total cost y for x items with 10,000 fixed and 5 per item:",
        "opts": ["x = 5y + 10,000", "x = 5y - 10,000", "**y = 5x + 10,000**", "y = 5x - 10,000"]
    },
    {
        "q": "17,000 Birr; sheep 3,000, goat 2,000. Which is impossible?",
        "opts": ["3 sheep, 4 goats", "**4 sheep, 3 goats**", "2 sheep, max 5 goats", "Max 8 goats"]
    },
    {
        "q": "Which is FALSE regarding matrices?",
        "opts": ["(A+Aᵀ)/3 is symmetric", "**2B - 3Bᵀ is skew-symmetric**", "BA exists if m=q", "AB can be zero"]
    },
    {
        "q": "Which vector is a unit vector?",
        "opts": ["**(√2/2)i - (√2/2)j**", "√12i + √2j", "i + j", "2i - (1/2)j"]
    },
    {
        "q": "Which is ALWAYS true?",
        "opts": ["Mean = Median", "Median = Mode", "**6th decile = 60th percentile**", "1st quartile = 75th percentile"]
    },
    {
        "q": "Find the limit: lim (x→2) (x² - 4)/(x - 2).",
        "opts": ["0", "2", "**4**", "Undefined"]
    },
    {
        "q": "The derivative of f(x) = sin(x) + cos(x) is:",
        "opts": ["**cos(x) - sin(x)**", "sin(x) - cos(x)", "cos(x) + sin(x)", "-cos(x) - sin(x)"]
    },
    {
        "q": "Find the area under y = x² from x=0 to x=3.",
        "opts": ["3", "6", "**9**", "27"]
    },
    {
        "q": "The solution to 2x + 5 < 11 is:",
        "opts": ["**x < 3**", "x > 3", "x < 8", "x > 8"]
    },
    {
        "q": "What is the slope of a line perpendicular to y = 2x + 3?",
        "opts": ["2", "-2", "1/2", "**-1/2**"]
    },
    {
        "q": "Find the value of log₂(32).",
        "opts": ["2", "4", "**5**", "16"]
    },
    {
        "q": "The volume of a sphere with radius r is:",
        "opts": ["πr²", "2πr", "**(4/3)πr³**", "4πr²"]
    },
    {
        "q": "If sin(θ) = 1/2, what is θ in the first quadrant?",
        "opts": ["**30°**", "45°", "60°", "90°"]
    },
    {
        "q": "The distance between (1, 2) and (4, 6) is:",
        "opts": ["3", "4", "**5**", "7"]
    },
    {
        "q": "Find the determinant of [[1, 2], [3, 4]].",
        "opts": ["**-2**", "2", "10", "-10"]
    },
    {
        "q": "Integration of 1/x dx is:",
        "opts": ["x²", "**ln|x| + C**", "eˣ", "1"]
    },
    {
        "q": "A sequence is 2, 4, 8, 16... find the 10th term.",
        "opts": ["100", "512", "**1024**", "2048"]
    },
    {
        "q": "Which is a prime number?",
        "opts": ["1", "9", "15", "**17**"]
    },
    {
        "q": "Probability of rolling a 6 on a standard die:",
        "opts": ["1/2", "1/3", "**1/6**", "1"]
    },
    {
        "q": "Range of f(x) = |x|:",
        "opts": ["All R", "**[0, ∞)**", "(-∞, 0]", "(0, ∞)"]
    },
    {
        "q": "Solve for x: 3^(x+1) = 27.",
        "opts": ["1", "**2**", "3", "4"]
    },
    {
        "q": "If a circle has circumference 10π, what is the area?",
        "opts": ["5π", "10π", "**25π**", "100π"]
    },
    {
        "q": "The sum of angles in a triangle is:",
        "opts": ["90°", "**180°**", "270°", "360°"]
    },
    {
        "q": "Derivative of e^2x:",
        "opts": ["e^2x", "**2e^2x**", "1/2 e^2x", "e^x"]
    },
    {
        "q": "Midpoint of (2, 4) and (6, 10):",
        "opts": ["**(4, 7)**", "(8, 14)", "(4, 14)", "(2, 3)"]
    },
    {
        "q": "Which is an irrational number?",
        "opts": ["4/5", "√9", "**√2**", "0.5"]
    },
    {
        "q": "Mode of {1, 2, 2, 3, 4}:",
        "opts": ["1", "**2**", "3", "4"]
    },
    {
        "q": "tan(45°) = ?",
        "opts": ["0", "1/2", "**1**", "√3"]
    },
    {
        "q": "Derivative of a constant is:",
        "opts": ["1", "The constant", "**0**", "x"]
    },
    {
        "q": "Solution of x² - 5x + 6 = 0:",
        "opts": ["1, 6", "**2, 3**", "-2, -3", "5, 6"]
    },
    {
        "q": "Standard deviation is the square root of:",
        "opts": ["Mean", "Median", "**Variance**", "Range"]
    },
    {
        "q": "If f(x) = 2x and g(x) = x + 3, find f(g(1)):",
        "opts": ["4", "5", "**8**", "10"]
    },
    {
        "q": "A vector with magnitude 0 is:",
        "opts": ["Unit vector", "**Zero vector**", "Scalar", "Parallel"]
    },
    {
        "q": "Scalar product of perpendicular vectors is:",
        "opts": ["1", "-1", "**0**", "Product of magnitudes"]
    },
    {
        "q": "Integral of sin(x) dx:",
        "opts": ["cos(x)", "**-cos(x) + C**", "tan(x)", "sin²(x)"]
    },
    {
        "q": "What is the 5th term of the arithmetic sequence 3, 7, 11...?",
        "opts": ["15", "**19**", "23", "27"]
    },
    {
        "q": "In a right triangle, c² = a² + b² is:",
        "opts": ["Euler's Law", "Newton's Law", "**Pythagoras Theorem**", "Thales Theorem"]
    },
    {
        "q": "If log(x) = 2, then x = ?",
        "opts": ["2", "10", "**100**", "20"]
    },
    {
        "q": "Among 2000 students, 20 failed Physics, 15 failed Math, 5 failed both. How many passed both?",
        "opts": ["1482", "**1970**", "1560", "1672"]
    },
    {
        "q": "If nC2 = 15, then n is:",
        "opts": ["5", "7", "**6**", "8"]
    },
    {
        "q": "The demand equation for a certain product is given by P = 12 - x birr, where x represents the amount of product. What is the maximum (total) revenue?",
        "opts": ["72", "144", "**36**", "108"]
    },
    {
        "q": "A pair of shoes has a markup of Birr 75, which is 15% of the selling price. Then the value of the selling price is?",
        "opts": ["2000", "1500", "**500**", "10000"]
    },
    {
        "q": "What is the sum of all multiples of 4 that are between 30 and 301?",
        "opts": ["12,882", "11,288", "**6,288**", "6,832"]
    },
    {
        "q": "What is the value of 5! / 2!?",
        "opts": ["120", "20", "**60**", "10"]
    },
    {
        "q": "The derivative of f(x) = cos(x^2) is:",
        "opts": ["-sin(x^2)", "2x sin(x^2)", "**-2x sin(x^2)**", "sin(2x)"]
    }
];

// ዳታውን ለሁለቱም ዘርፍ እንዲታይ መመደብ
QUESTIONS_DB.ModelExams.Natural.Maths = { "2017_Model": mathsModelData };
QUESTIONS_DB.ModelExams.Social.Maths = { "2017_Model": mathsModelData };

console.log("60 Maths Model questions loaded for Natural and Social.");
