const express = require('express')
const app = express()
console.log(app)

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const name = "Marco";
  let user = [
    { id:1,  name},
  ]
  
  app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  })

  app.get('/', (req, res) =>{
    res.send(user);
  })

  app.get('/addUser', (req, res) => {
    const { id, name } = req.query;
    user.push({
        id: parseInt(id), name
    })
    res.status(200).send({ id, name });
    
  });

  app.get('/editUser', (req, res) => {
    const { id, name } = req.query;
    const users = user.find((us) => id == us.id)
    users.name = name
    res.status(200).send({ id, name });
  })

  app.get('/deleteUser', (req, res) => {
    const { id, name} = req.query;
    const users = user.filter((us) => id != us.id)
    user = users
    res.status(200).send({ id, name });
  })

  app.get('/showUser', (req, res) => {
    const {id} = req.query;
    const users = user.find((us) => id == us.id)
    res.status(200).send(users);
  })