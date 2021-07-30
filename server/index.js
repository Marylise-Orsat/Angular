var express = require('express');
var fs = require('fs');
var cors = require('cors');
var app = express();
const dao = require("./dao");

let messages = JSON.parse(fs.readFileSync('datas.json'));
let newId = JSON.parse(fs.readFileSync('id.json'));


// le type de données que l'on envoit :
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.unsubscribe(cors({
    origin: "*",
    optionsSuccessStatus: 200
}))


// Elle renvoit une liste de messages
app.get('/messages', function (req, res) {
    res.sontentType("./application.json").status(200).send(dao.getMessages());
})

// Elle ajoute un message dans la liste de messages
app.post('/messages/:id', function (req, res) {
    newId++;
    req.body.id = newId;
    messages.push(req.body);
    // écrase l'id dans le fichier id.json
    fs.writeFileSync('id.json', JSON.stringify(newId));
    fs.writeFileSync('datas.json', JSON.stringify(messages));
    res.setHeader('Content-Type', 'application/json').send({message: 'bien reçu'})
})

// Elle met à jour l'état d'un message en le passant à "Lu"
app.put('/messages/:id/read', (request, response)=> {
    let status = 304; //par défaut le status renvoit une erreur
    // on fait une recherche dans notre liste de messages
    messages = messages.map(m => {
        // si les id sont égaux et que read=false -> osn passe le read à true avec un status ok
        if(m.id == request.params.id) {
            if(m.read === false) {
                m.read = true;
                status = 200;
            }
        } 
        return m;
    })
    fs.writeFileSync('datas.json', JSON.stringify(messages));
    response.status(status).send('message ' + request.params.id + ' lu');
})

// Supprimer un message en fonction de son id
app.delete('/messages/:id', (request, response)=> {
    let status = 400;
    messages = messages.map(m => {
        if(m.id == request.params.id) {
            messages.splice(m.id, 1);
            status = 200;
        }
    })
    fs.writeFileSync('datas.json', JSON.stringify(messages));
    response.status(status).send('message ' + request.params.id + ' supprimé');
})


//app.listen(80);
module.exports = app;