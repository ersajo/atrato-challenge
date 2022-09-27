const express = require("express");
const cors = require('cors')
const clientsController = require("./controller/users");
const app = express();
const PORT = 4000;

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/users', clientsController.getUsers);
app.post('/user', clientsController.createUser);

app.get('/', function(req, res){
  res.send('Hello from backend')
})