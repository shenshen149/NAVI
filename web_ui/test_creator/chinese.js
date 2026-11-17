let hsk = {
    name:"hsk",
    questions:[],
    data:[
        { question: "你好", answer: "ni3 hao3", description: "hello" },
        { question: "王老师", answer: "wang2 lao3 shi1", description: "teacher wang" },
        { question: "大家", answer: "da4 jia1", description: "every one" },
        { question: "学生", answer: "xue2 sheng1", description: "student" },
        { question: "们", answer: "men", description: "plural marker for pronouns" },
        { question: "谢谢", answer: "xie4 xie4", description: "thank you" },
        { question: "不客气", answer: "bu2 ke4 qi", description: "you're welcome" },
        { question: "再见", answer: "zai4 jian4", description: "goodbye" },
        { question: "同学", answer: "tong2 xue2", description: "classmate" },
        { question: "在", answer: "zai4", description: "at / in / on" },
        { question: "学校", answer: "xue2 xiao4", description: "school" },
        { question: "书店", answer: "shu1 dian4", description: "bookstore" },
        { question: "前", answer: "qian2", description: "front / before" },
        { question: "能", answer: "neng2", description: "can / able to" },
        { question: "到", answer: "dao4", description: "to arrive / to reach" },
        { question: "午饭", answer: "wu3 fan4", description: "lunch" },
        { question: "房间", answer: "fang2 jian1", description: "room" },
        { question: "外", answer: "wai4", description: "outside" },
        { question: "只", answer: "zhi3", description: "only (used for certain animals)" },
        { question: "小", answer: "xiao3", description: "small" },
        { question: "猫", answer: "mao1", description: "cat" },
        { question: "没", answer: "mei2", description: "not / have not" },
        { question: "看见", answer: "kan4 jian4", description: "to see" },
        { question: "桌子", answer: "zhuo1 zi", description: "table / desk" },
        { question: "下", answer: "xia4", description: "under / below" },
        { question: "漂亮", answer: "piao4 liang5", description: "pretty / beautiful" }
    ]
}
hsk.questions = create_questions(hsk.data)
