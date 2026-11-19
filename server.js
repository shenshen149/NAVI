const express = require('express');
const cors = require('cors');
const path = require('path');
//const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');
const fs = require('fs');
const os = require('os');

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "files"));
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname);
  }
});
// Export multer instance
const upload = multer({ storage });

let db_queries = {}

// Get all network interfaces
function getNetworkIPs() {
  const interfaces = os.networkInterfaces();
  const addresses = [];

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal (loopback) and non-IPv4 addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push({ interface: name, address: iface.address });
      }
    }
  }
  return addresses;
}

function init_(){
  db.run(`CREATE TABLE IF NOT EXISTS user_notes (id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT, text TEXT)`);
  db.run(`CREATE TABLE IF NOT EXISTS files (id INTEGER PRIMARY KEY AUTOINCREMENT,path TEXT, type TEXT)`);
  db.run(`CREATE TABLE IF NOT EXISTS quick_notes (id INTEGER PRIMARY KEY AUTOINCREMENT,text TEXT, date_created TEXT)`);

  db_queries.create_note = db.prepare('INSERT INTO user_notes (title, text) VALUES (?, ?)');
  db_queries.delete_note = db.prepare('DELETE FROM user_notes WHERE id = ?')
  db_queries.update_note = db.prepare('UPDATE user_notes SET text = ? WHERE id = ?')

  db_queries.create_quick_note = db.prepare('INSERT INTO quick_notes (text, date_created) VALUES (?, ?)');
  db_queries.delete_quick_note = db.prepare('DELETE FROM quick_notes WHERE id = ?')
  db_queries.update_quick_note = db.prepare('UPDATE quick_notes SET text = ? WHERE id = ?')
}

app.use(cors());
app.use('/', express.static(__dirname));
app.use(express.json());

app.get('/',async(req,res)=>{
    res.sendFile(path.join(__dirname, 'web_ui/index.html'));
});

app.post('/create_note',async(req,res)=>{
    try{
        db_queries.create_note.run(req.body.title,req.body.text)
        res.json({message:"success"})
    }catch (err){
        console.error(err);
    }
});

app.post('/delete_note',async(req,res)=>{
    try{
        db_queries.delete_note.run(req.body.data.id)
        res.json({message:"success"})
    }catch (err){
        console.error(err);
    }
});

app.post('/update_note',async(req,res)=>{
    try{
        db_queries.update_note.run(req.body.text,req.body.id)
        res.json({message:"success"})
    }catch (err){
        console.error(err);
    }
});

app.get('/get_notes',async(req,res)=>{
    try {
        db.all("SELECT * FROM user_notes", (err, rows) => {
          if (err) {
              console.error(err.message);
          } else {
              res.json(rows)
          }
        });
    } catch (err) {
        console.error(err);
    }
    
});

let all_files=[]

fs.readdir('./files/', (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }
    all_files=files
});

app.get('/files',async(req,res)=>{
    try {
        res.json(all_files)
    } catch (err) {
        console.error(err);
    }
});

app.post('/upload', upload.array('files'), async (req, res) => {
    res.json({message:'files uploaded'})
});

app.post('/create_quick_note',async(req,res)=>{
    try{
        db_queries.create_quick_note.run(req.body.text,req.body.date)
        res.json({message:"success"})
    }catch (err){
        console.error(err);
    }
});

app.post('/delete_quick_note',async(req,res)=>{
    try{
        db_queries.delete_quick_note.run(req.body.id)
        res.json({message:"success"})
    }catch (err){
        console.error(err);
    }
});

app.get('/get_quick_notes',async(req,res)=>{
    try {
        db.all("SELECT * FROM quick_notes", (err, rows) => {
          if (err) {
              console.error(err.message);
          } else {
              res.json(rows)
          }
        });
    } catch (err) {
        console.error(err);
    }
    
});

/* Fetch a single row
db.get("SELECT * FROM users WHERE id = ?", [1], (err, row) => {
   if (err) {
       console.error(err.message);
   } else {
       console.log(row);
   }
});*/
const PORT = 3050
app.listen(3050, () => {
  console.log(`Server running on port ${PORT}`);
  
  const ips = getNetworkIPs();
  ips.forEach(({ interface: iface, address }) => {
    console.log(`  ${iface}: http://${address}:${PORT}`);
  });
});