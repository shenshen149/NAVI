let hsk_data = [
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
    { question: "漂亮", answer: "piao4 liang5", description: "pretty / beautiful" },
    {question: "请问",answer: "qing3 wen4",description: "excuse me/ may i ask"},
    {question: "什么",answer: "shen2 me",description: "what"},
    {question: "名字",answer: "ming2 zi",description: "name"},
    {question: "对不起",answer: "dui4 bu qi3",description: "sorry"},
    {question: "没关系",answer: "mei2 guan1 xi",description: "its all right/ nevermind"},
    {question: "高兴",answer: "gao1 xing2",description: "happy/glad"},
    {question: "认识",answer: "ren4 shi",description: "to know/ become aquainted with"},
    {question: "工作",answer: "gong1 zuo4",description: "work"},
    {question: "还",answer: "hai2",description: "still"},
    {question: "忙",answer: "mang2",description: "busy"},
    {question: "对",answer: "dui4",description: "right"},
    {question: "太",answer: "tai4",description: "too/ excessively"},
]

let hsk_audio_mcqs = {
    name:"hsk audio mcqs",
    questions:[
        
        {
            question: "<audio src='audio/001.mp3' controls/>",
            correct: "现在几点",
            description: "what time is it",
            type: "fill in"
        },
        {
            question: "<audio src='audio/002.mp3' controls/>",
            correct: "早上八点四十",
            description: "its 840 in the morning",
            type: "fill in"
        },
        {
            question: "<audio src='audio/003.mp3' controls/>",
            correct: "我上午十点十分有课",
            description: "i have a class at 10.10 in the morning",
            type: "fill in"
        },
        {
            question: "<audio src='audio/004.mp3' controls/>",
            correct: "好的，我们下午两点见吧",
            description: "alright, lets meet at 2.00 in the afternoon",
            type: "fill in"
        },
        {
            question: "<audio src='audio/005.mp3' controls/>",
            correct: "下午我想去电影院看电影，你去吗？",
            description: "i want to go to the cinema to watch a movie this afternoon. are you going.",
            type: "fill in"
        },
        {
            question: "<audio src='audio/006.mp3' controls/>",
            correct: "我不想去，下午还有事",
            description: "i dont want to go. i still have something to do this afternoon",
            type: "fill in"
        },
        {
            question: "<audio src='audio/007.mp3' controls/>",
            correct: "我明天下午两点还上课呢，四点半下课",
            description: "i have a class tomorrow afternoon at 2.00 and it finishes at 4.30",
            type: "fill in"
        }

    ]
}
let hsk_mcqs = {
    name:"hsk mcqs",
    questions: create_mcq_questions(hsk_data)
}
let hsk_fill_ins = {
    name:"hsk fill ins",
    questions: create_fillin_questions(hsk_data)
}
