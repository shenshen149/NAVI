let radical_course = {name:"radicals",questions:[]}
const characters = [
    { char: "水", sound: "shui3", img: "shui.png", meaning: "water" },
    { char: "木", sound: "mu4", img: "mu.png", meaning: "wood / tree" },
    { char: "grass", sound: "cao3", img: "cao.png", meaning: "grass" },
    { char: "口", sound: "kou3", img: "kou.png", meaning: "mouth" },
    { char: "手", sound: "shou3", img: "shou.png", meaning: "hand" },
    { char: "人", sound: "ren2", img: "ren.png", meaning: "person" },
    { char: "金", sound: "jin1", img: "jin.png", meaning: "gold / metal" },
    { char: "心", sound: "xin1", img: "xin.png", meaning: "heart" },
    { char: "女", sound: "nu3", img: "nu.png", meaning: "woman" },
    { char: "虫", sound: "chong2", img: "chong.png", meaning: "insect / bug" },
    { char: "冰", sound: "bing1", img: "bing.png", meaning: "ice" },
    { char: "火", sound: "huo3", img: "huo.png", meaning: "fire" },
    { char: "筑", sound: "zhu4", img: "zhu.png", meaning: "to build" },
    { char: "日", sound: "ri4", img: "ri.png", meaning: "sun / day" },
    { char: "月", sound: "yue4", img: "yue.png", meaning: "moon / month" },
    { char: "阜", sound: "fu4", img: "fu.png", meaning: "mound / hill" },
    { char: "土", sound: "tu3",  img: "tu.png",   meaning: "earth / soil" },
    { char: "雨", sound: "yu3",  img: "yu.png",   meaning: "rain" },
    { char: "丝", sound: "si1",  img: "si.png",   meaning: "silk" },
    { char: "山", sound: "shan1", img: "shan.png", meaning: "mountain" },
    { char: "石", sound: "shi2", img: "shi2.png",  meaning: "stone / rock" },
    { char: "玉", sound: "yu4",  img: "yu4.png",  meaning: "jade" },
    { char: "欠", sound: "qian4", img: "qian.png", meaning: "open mouth" },
    { char: "食", sound: "shi2", img: "shi22.png", meaning: "food / to eat" },
    { char: "言", sound: "yan2", img: "yan.png",  meaning: "speech / words" },
    { char: "子", sound: "zi3",  img: "zi.png",   meaning: "child" },
    { char: "肉", sound: "rou4", img: "rou.png",  meaning: "meat / flesh" },
    { char: "衣", sound: "yi1",  img: "yi.png",   meaning: "clothes" },
    { char: "目", sound: "mu4",  img: "mu2.png",  meaning: "eye" },
    { char: "又", sound: "you4", img: "you.png",  meaning: "hand" },
    { char: "two hands", sound: "gong3", img: "gong2.png", meaning: "hands" },
    { char: "the arm", sound: "gong1", img: "gong.png", meaning: "hands" },
    { char: "页", sound: "ye4",  img: "ye.png",   meaning: "page / head" },
    { char: "耳", sound: "er3",  img: "er.png",   meaning: "ear" }
];

function set_radical(index){
    let i = index
    let qstn = {
            question: `radical of ${characters[i].char} ${characters[i].sound} ${characters[i].meaning}`,
            options: [],
            correct: 0,
            subject: "chinese",
            type:"multiple choice"
        };

        // 1. Pick the correct position (0–3)
        const correct = Math.floor(Math.random() * 4);
        qstn.correct = correct;

        // 2. Build a pool of distractor indices, excluding the correct one
        const distractorPool = [];
        for (let k = 0; k < characters.length; k++) {
            if (k !== i) distractorPool.push(k);
        }

        // 3. Shuffle the pool so distractors are unique
        for (let k = distractorPool.length - 1; k > 0; k--) {
            const r = Math.floor(Math.random() * (k + 1));
            [distractorPool[k], distractorPool[r]] = [distractorPool[r], distractorPool[k]];
        }

        // 4. Fill 4 options
        let distractorsUsed = 0;
        for (let j = 0; j < 4; j++) {
            if (j === correct) {
                qstn.options.push(
                    `<img width=100 height=100 src='radics/${characters[i].img}'>`
                );
            } else {
                const d = distractorPool[distractorsUsed++];
                qstn.options.push(
                    `<img width=100 height=100 src='radics/${characters[d].img}'>`
                );
            }
        }
        return qstn

}
function set_chinese_sound_question(index){
    let i = index
    let qstn = {
            question: `the sound of <img width=100 height=100 src='radics/${characters[i].img}'>`,
            options: [],
            correct: 0,
            subject: "chinese",
            type:"multiple choice"
        };

        // 1. Pick the correct position (0–3)
        const correct = Math.floor(Math.random() * 4);
        qstn.correct = correct;

        // 2. Build a pool of distractor indices, excluding the correct one
        const distractorPool = [];
        for (let k = 0; k < characters.length; k++) {
            if (k !== i) distractorPool.push(k);
        }

        // 3. Shuffle the pool so distractors are unique
        for (let k = distractorPool.length - 1; k > 0; k--) {
            const r = Math.floor(Math.random() * (k + 1));
            [distractorPool[k], distractorPool[r]] = [distractorPool[r], distractorPool[k]];
        }

        // 4. Fill 4 options
        let distractorsUsed = 0;
        for (let j = 0; j < 4; j++) {
            if (j === correct) {
                qstn.options.push(
                    `${characters[i].sound} (${characters[i].meaning})`
                );
            } else {
                const d = distractorPool[distractorsUsed++];
                qstn.options.push(
                    `${characters[d].sound} (${characters[d].meaning})`
                );
            }
        }
        return qstn

}

function set_chinese_fillin_question(index){
    let i = index
    let qstn = {
            question: `the sound of <img width=100 height=100 src='radics/${characters[i].img}'>`,
            correct: `${characters[i].sound}`,
            subject: "chinese",
            type:"fill in"
        };

        return qstn

}

for (let i = 0; i < characters.length; i++) {
    let qstn = set_radical(i)
    let qstn2 = set_chinese_sound_question(i)
    let qstn3 = set_chinese_fillin_question(i)
    radical_course.questions.push(qstn);
    radical_course.questions.push(qstn2);
    radical_course.questions.push(qstn3)
}

function create_multiple_choice(data,index){
    let qstn = {
            question: `${data[index].question}`,
            options: [],
            correct: 0,
            type:"multiple choice"
        };

        // 1. Pick the correct position (0–3)
        const correct = Math.floor(Math.random() * 4);
        qstn.correct = correct;

        // 2. Build a pool of distractor indices, excluding the correct one
        const distractorPool = [];
        for (let k = 0; k < data.length; k++) {
            if (k !== index) distractorPool.push(k);
        }

        // 3. Shuffle the pool so distractors are unique
        for (let k = distractorPool.length - 1; k > 0; k--) {
            const r = Math.floor(Math.random() * (k + 1));
            [distractorPool[k], distractorPool[r]] = [distractorPool[r], distractorPool[k]];
        }

        // 4. Fill 4 options
        let distractorsUsed = 0;
        for (let j = 0; j < 4; j++) {
            if (j === correct) {
                qstn.options.push(
                    `${data[index].answer}`
                );
            } else {
                const d = distractorPool[distractorsUsed++];
                qstn.options.push(
                    `${data[d].answer}`
                );
            }
        }
        return qstn
}

function create_fillin(data,index){
    let qstn = {
            question: `${data[index].question}`,
            correct: `${data[index].answer}`,
            type:"fill in"
        };

        return qstn

}

function create_questions(data){
    let questionlist = []
    for (let i = 0; i < data.length; i++) {
        let qstn = create_multiple_choice(data,i)
        let qstn2 = create_fillin(data,i)
        questionlist.push(qstn);
        questionlist.push(qstn2);
    }
    return questionlist
}

