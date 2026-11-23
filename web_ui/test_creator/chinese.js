let hsk_data = [
    //1
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
    //2
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
    {question: "现在", answer: "xian4zai4", description: "now"},
    {question: "点", answer: "dian3", description: "o'clock"},
    {question: "早上", answer: "zao3 shang", description: "(early) morning"},
    {question: "上午", answer: "shang4 wu3", description: "morning"},
    {question: "分", answer: "fen1", description: "minute"},
    {question: "课", answer: "ke4", description: "class; lesson"},
    {question: "下午", answer: "xia4 wu3", description: "afternoon"},
    {question: "见", answer: "jian4", description: "meet"},
    {question: "吧", answer: "ba", description: "used at the end of a sentence to express suggestions, consultations, advice, or requests"},
    {question: "电影院", answer: "dian4 ying3 yuan4", description: "cinema"},
    {question: "看", answer: "kan4", description: "watch; see; read; look at"},
    {question: "电影", answer: "dian4 ying3", description: "movie; film"},
    {question: "事", answer: "shi4", description: "thing; affair"},
    {question: "上课", answer: "shang4 ke4", description: "attend a class"},
    {question: "呢", answer: "ne", description: "marker of a declarative sentence"},
    {question: "半", answer: "ban4", description: "half"},
    {question: "下课", answer: "xia4 ke4", description: "dismiss a class"},
    //3
    {question: "在", answer: "zai4", description: "be at/in/on"},
    {question: "家", answer: "jia1", description: "home"},
    {question: "里", answer: "li3", description: "inner; inside"},
    {question: "晚上", answer: "wan3 shang", description: "evening"},
    {question: "医院", answer: "yi1 yuan4", description: "hospital"},
    {question: "上班", answer: "shang4 ban1", description: "go to work"},
    {question: "店", answer: "dian4", description: "shop; store"},
    {question: "菜", answer: "cai4", description: "vegetable; greens"},
    {question: "分钟", answer: "fen1 zhong1", description: "minute"},
    {question: "后", answer: "hou4", description: "after; later"},
    {question: "房间", answer: "fang2 jian1", description: "room"},
    {question: "外", answer: "wai4", description: "outside"},
    {question: "只", answer: "zhi1", description: "for certain animals"},
    {question: "小", answer: "xiao3", description: "small; little"},
    {question: "猫", answer: "mao1", description: "cat"},
    {question: "没", answer: "mei2", description: "no; not; not yet"},
    {question: "看见", answer: "kan4 jian4", description: "see; catch sight of"},
    {question: "桌子", answer: "zhuo1zi", description: "table; desk"},
    {question: "下", answer: "xia4", description: "low position or rank"},
    {question: "漂亮", answer: "piao4liang", description: "pretty; beautiful"},
    {question: "饭", answer: "fan4", description: "meal"},
    //4
    {question: "大", answer: "da4", description: "big; large"},
    {question: "病人", answer: "bing4 ren2", description: "patient"},
    {question: "多", answer: "duo1", description: "many; much"},
    {question: "医生", answer: "yi1 sheng1", description: "doctor"},
    {question: "工作", answer: "gong1 zuo4", description: "work"},
    {question: "前边", answer: "qian2 bian", description: "front"},
    {question: "边", answer: "bian / bian1", description: "indicating locality/edge; side"},
    {question: "家", answer: "jia1", description: "for families or enterprises"},
    {question: "那个", answer: "na4 ge", description: "that"},
    {question: "外边", answer: "wai4 bian", description: "outside"},
    {question: "椅子", answer: "yi3 zi", description: "chair"},
    {question: "上", answer: "shang / shang4", description: "used after a noun, indicating position/higher position"},
    {question: "本", answer: "ben3", description: "for books"},
    {question: "书", answer: "shu1", description: "book"},
    {question: "那", answer: "na4", description: "that"},
    {question: "第", answer: "di4", description: "marker of ordinal numbers"},
    {question: "学习", answer: "xue2 xi2", description: "study; learn"},
    {question: "做", answer: "zuo4", description: "do; engage in"},
    //5
    {question: "白天", answer: "bai2 tian1", description: "day; daytime"},
    {question: "读书", answer: "du2 shu1", description: "read a book"},
    {question: "和", answer: "he2", description: "with"},
    {question: "朋友", answer: "peng2 you", description: "friend"},
    {question: "唱", answer: "chang4", description: "sing"},
    {question: "歌", answer: "ge1", description: "song"},
    {question: "好听", answer: "hao3 ting1", description: "pleasant to hear"},
    {question: "电视", answer: "dian4 shi4", description: "television"},
    {question: "狗", answer: "gou3", description: "dog"},
    {question: "玩", answer: "wan2", description: "play; have fun"},
    {question: "杯子", answer: "bei1 zi", description: "cup; glass"},
    {question: "售货员", answer: "shou4 huo4 yuan2", description: "shop assistant; salesperson; vendor"},
    {question: "这边", answer: "zhe4 bian1", description: "here; this side"},
    {question: "钱", answer: "qian2", description: "money"},
    {question: "这些", answer: "zhe4 xie1", description: "these"},
    {question: "块", answer: "kuai4", description: "for silver dollars or paper money"},
    {question: "那些", answer: "na4 xie1", description: "those"},
    {question: "这儿", answer: "zhe4r", description: "here"},
    {question: "水果", answer: "shui3 guo3", description: "fruit"},
    {question: "少", answer: "shao3", description: "few; little"},
    {question: "斤", answer: "jin1", description: "jin (measurement for 0.5kg"},
    {question: "苹果", answer: "ping2 guo3", description: "apple"},
    {question: "便宜", answer: "pian2 yi", description: "cheap; affordable"}
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
        },
        {
            question: "<audio src='audio/008.mp3' controls/>",
            correct: "好的。明天呢?",
            description: "how about tomorrow",
            type: "fill in"
        },
        {
            question: "<audio src='audio/009.mp3' controls/>",
            correct: "喂, 你在哪儿呢？",
            description: "hey, where are you",
            type: "fill in"
        },
        {
            question: "<audio src='audio/010.mp3' controls/>",
            correct: "我在家里呢。",
            description: "im at home",
            type: "fill in"
        },
        {
            question: "<audio src='audio/011.mp3' controls/>",
            correct: "我晚上六点半下班。",
            description: "ill finish work at 6.30 in the evening",
            type: "fill in"

        },
        {
            question: "<audio src='audio/012.mp3' controls/>",
            correct: "我入点去医院上班。",
            description: "ill go to work at the hospital at 8.00",
            type: "fill in"
        },
        {
            question: "<audio src='audio/013.mp3' controls/>",
            correct: "好的,你去店里买些吧。",
            description: "alright, could you go to the store to buy some vegetables",
            type: "fill in"
        },
        {
            question: "<audio src='audio/014.mp3' controls/>",
            correct: "好, 我十分钟后去。",
            description: "okay, ill go in ten minutes",
            type: "fill in"
        },
        {
            question: "<audio src='audio/015.mp3' controls/>",
            correct: "请问，有杯子吗？",
            description: "excuse me, do you have any cups",
            type: "fill in"
        },
        {
            question: "<audio src='audio/016.mp3' controls/>",
            correct: "有，杯子在这边 ",
            description: "yes, the cups are over there",
            type: "fill in"
        },
        {
            question: "<audio src='audio/017.mp3' controls/>",
            correct: "多少钱一个？",
            description: "how much is one",
            type: "fill in"
        },
        {
            question: "<audio src='audio/018.mp3' controls/>",
            correct: "这些五块钱一个，那些十块钱一个",
            description: "these are five yuan each, and those are ten yuan each",
            type: "fill in"
        },
        {
            question: "<audio src='audio/019.mp3' controls/>",
            correct: "我买这个吧",
            description: "ill take this one please",
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
