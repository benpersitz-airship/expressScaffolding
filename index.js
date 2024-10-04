const express = require('express') //brings in express. yay express.
const app = express() //init an instance of express
const port = process.envport || 3000 //set port for starting server
app.use(express.json()) //tells express how to parse incoming requests. we like JSON. JSON is good.


app.get('/', async(req,res) => {
    res.send("HELLO WORLD") //api sends back hello world 
})

//you can follow the pattern below to setup different routes. webhook routes need to be a post.
//req object is incoming request, res object is outgoing response.
app.post('/1stwebhook', async(req,res) => {
    const body = req.body //get the body of the post request through express magic
    console.log(body) //prints to the server logs
    res.status(200).send({"message": `got your post request.`}) //sets the HTTP status code of the response and responds with a message
})

//this starts the server up, specifying the port to run on either from your env, or if no env file it defaults to 3000. This should be the last thing in your file below all your API routes
app.listen(port, "0.0.0.0", () =>{
    console.log('Server listening for requests on port 3000')
})