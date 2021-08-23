require("dotenv").config();
const Express = require('express');
const app = Express();
const dbConnection = require("./db")
//lets postman understand json
app.use(Express.json());

const controllers = require("./controllers");

app.use('/test', (req,res) =>{
    res.send('This is a message from the text endpoint on the server!')
})
app.use('/journal', controllers.journalController);
//app.use(require("./middleware/validate-jwt"));

app.use('/user', controllers.userController)


dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Server]: App is listening on 3000`)
        })
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`)
    })

//app.listen(3000, () => {
//    console.log(`[Server]: App is listening on 3000`)
//}); 


