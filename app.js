//permet de faire un serveur web TRES SIMPLE en node js 
// avec EXPRESS

// CE N EST PAS CHARGE DANS UN FICHIER HTML (n'est pas executé dans le navigateur)

//import de la librairie
const express = require('express')


//---- création et la configuration du serveur web (avec express) ----
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json());

//variable globale, normalement data connecté à bdd
let data = [
  {
    'task': "manger du poulet"
  },
  {
    'task': "faire du sport"
  },
  
]


// Chaque fois que tu reçois une requête, renvoie la liste des tâches
app.get("/task-list", (req, res) => {


  res.json(data)
})

app.post("/new-task", (req, res) => {


  data.push(req.body)
  res.send(data)
})

// lancement du serveur
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
