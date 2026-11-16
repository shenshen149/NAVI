
let provider = null

function set_url(url){
    document.getElementById("server_url").innerHTML=url
    sessionStorage.setItem("navi_server_url",url)
}
const localstorage_provider = {
    async get_user_data(){
        if(!sessionStorage.getItem("NAVI_USER_DATA")){
            sessionStorage.setItem("NAVI_USER_DATA",JSON.stringify({
                notes:[{id:0,title:"local note",text:"this is my local note"}],
                quick_messages:[],
                checklists:[
                    {name:"mylist",items:["hceck item 1","check item 2"]}
                ]
            }))
        }
        let data = JSON.parse(sessionStorage.getItem("NAVI_USER_DATA"))
        return data
    },
   async get_user_notes(){
        let data = await this.get_user_data()
        return data.notes
    },
    async create_user_note(note){
        let data = JSON.parse(sessionStorage.getItem("NAVI_USER_DATA"))
        note.id = data.notes.length
        data.notes.push(note)
        sessionStorage.setItem("NAVI_USER_DATA",JSON.stringify(data))
    },
    async delete_user_note(note){
        let data = JSON.parse(sessionStorage.getItem("NAVI_USER_DATA"))
        for(let i=0;i<data.notes.length;i++){
            if(data.notes[i]==note){
                data.notes.splice(i,1)
            }
        }
        sessionStorage.setItem("NAVI_USER_DATA",JSON.stringify(data))
    },
    async get_checklists(){
        let data = await this.get_user_data()
        return data.checklists
    },
    async create_checklist(name){
        let data = await this.get_user_data()
        data.checklists.push({name:name,items:[]})
        sessionStorage.setItem("NAVI_USER_DATA",JSON.stringify(data))
    },
    async add_check(name,item){
        let data = await this.get_user_data()
        let checklists = data.checklists
        for(let i=0;i<checklists.length;i++){
            if(checklists[i].name==name){
                checklists[i].items.push(item)
            }
        }
        sessionStorage.setItem("NAVI_USER_DATA",JSON.stringify(data))
    }
}
const server_provider = {
    async get_user_notes(){
        try{
            console.log("rendering data")
            const res = await fetch(`${sessionStorage.getItem("navi_server_url")}/get_notes`,
                {
                    method: 'GET'
                },
                
            );
            const data = await res.json();
            if(data.error){
                set_error(data.error)
                return
            }
            console.log(data)
            return data
            
        }catch (err){
            console.log(err)
        }
    },
    async create_user_note(note){
        try {
            const response = await fetch(`${sessionStorage.getItem("navi_server_url")}/create_note`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(note)
            });
            
            if (!response.ok) throw new Error('Failed to create post');
            
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating post: ' + error.message);
        }
    },
    async delete_user_note(note){
        try {
            const response = await fetch(`${sessionStorage.getItem("navi_server_url")}/delete_note`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({data:note})
            });
            
            if (!response.ok) throw new Error('Failed to create post');
            
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating post: ' + error.message);
        }
    }
}

// ---- SAVE DATA AS JSON FILE ----
function save_to_json() {
    let data = JSON.parse(sessionStorage.getItem("NAVI_USER_DATA"))
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    const date = new Date().toISOString().split("T")[0];
    a.download = `NAVI_USER_DATA_${date}.json`;
    a.click();

    URL.revokeObjectURL(url);
    this.event_handler.set_message({
        text:'save successful',
        canClose:true,
        options:[]
    })
};

// ---- LOAD DATA FROM JSON FILE ----
function load_json_file(){
    let file_input = document.getElementById("import-file-input")
    const file = file_input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        try {
            const loadedData = JSON.parse(reader.result);

            // Save to localStorage
            sessionStorage.setItem("NAVI_USER_DATA",JSON.stringify(loadedData))
            alert("data loaded")
        } catch (e) {
            alert("Invalid save file");
        }
    };
    reader.readAsText(file);
};

let prov = sessionStorage.getItem("navi_user_storage_preference")
if(!prov){
    prov = "local"
    provider = localstorage_provider
    sessionStorage.setItem("navi_user_storage_preference",prov)
}else{
    if(prov=="local"){
        provider = localstorage_provider
        sessionStorage.setItem("navi_user_storage_preference",prov)
        
    }else{
        provider = server_provider
        sessionStorage.setItem("navi_user_storage_preference",prov)
    }
}

document.getElementById("nav").innerHTML=`
    <a href="index.html">home</a>
    <a href="notes.html">notes</a>
    <a href="files.html">files</a>
    <a href="quick_message.html">quick notes</a>
    <a href="check_list.html">check list</a>
    <a href="test_creator/index.html">test</a>
`
if(!sessionStorage.getItem("navi_server_url")){
    const url = new URL(window.location.href);
    const host = url.hostname? url.hostname : 'localhost';
    let IP = `http://${host}:3050`;
    set_url(IP)
}else{
    set_url(sessionStorage.getItem("navi_server_url"))
}


