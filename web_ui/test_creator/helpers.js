function create_multiple_choice(data,index){
    let qstn = {
            question: `${data[index].question}`,
            options: [],
            correct: 0,
            description:data[index].description?data[index].description:"",
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
        description:data[index].description?data[index].description:"",
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

function export_course(){
    let data = selected_courses[0]
    if(!data)return
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    const date = new Date().toISOString().split("T")[0];
    a.download = `${data.name}.json`;
    a.click();

    URL.revokeObjectURL(url);
    this.event_handler.set_message({
        text:'save successful',
        canClose:true,
        options:[]
    })
}

function import_course(){
    let file_input = document.getElementById("import_file")
    const file = file_input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        try {
            const loadedData = JSON.parse(reader.result);

            // Save to localStorage
            courses.push(loadedData)
            alert("data loaded")
            render_course_list()
        } catch (e) {
            alert("Invalid save file");
        }
    };
    reader.readAsText(file);
}