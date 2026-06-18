// 1. ዋናው የዳታቤዝ መዋቅር (ልክ በፎቶው ባሉት ፋይሎች መሰረት)
var QUESTIONS_DB = {
    Natural: { 
        Biology: {}, Chemistry: {}, Physics: {} 
    },
    Social: { 
        History: {}, Geography: {}, Economics: {} 
    },
    Common: { 
        English: {}, Maths: {} 
    },
    ModelExams: {
        Natural: { 
            Biology: {}, Chemistry: {}, Physics: {}, English: {}, Maths: {} 
        },
        Social: { 
            History: {}, Geography: {}, Economics: {}, English: {}, Maths: {}, Aptitude: {} 
        }
    }
};

// 2. በፎቶው ላይ ባሉት የፋይል ስሞች መሰረት ራውንዶችን መፍጠር
// እነዚህ ስሞች በፈተናው ምርጫ ላይ "Model 1", "Model 2" ሆነው ይወጣሉ
const modelNames = ["Model_1", "Model_2", "Model_3", "Model_4"];
const years = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];

function initDB() {
    // ሀ. ለዋናው ፈተና (በአመተ ምህረት)
    ["Natural", "Social", "Common"].forEach(cat => {
        Object.keys(QUESTIONS_DB[cat]).forEach(sub => {
            years.forEach(yr => {
                if (!QUESTIONS_DB[cat][sub][yr]) QUESTIONS_DB[cat][sub][yr] = [];
            });
        });
    });

    // ለ. ለሞዴል ፈተና (በሞዴል ስም)
    ["Natural", "Social"].forEach(stream => {
        Object.keys(QUESTIONS_DB.ModelExams[stream]).forEach(sub => {
            modelNames.forEach(mod => {
                if (!QUESTIONS_DB.ModelExams[stream][sub][mod]) {
                    QUESTIONS_DB.ModelExams[stream][sub][mod] = [];
                }
            });
        });
    });
}

// ዳታቤዙን ማስጀመር
initDB();

console.log("MMSS Database Configured for Desktop Files!");
