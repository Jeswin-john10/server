// 1 -import json file
const jsonserver=require('json-server')


// 2-create server
const biodataserver=jsonserver.create()

// middleware to parse json format
const middleware=jsonserver.defaults()



//set path to store data
const router=jsonserver.router("db.json")

// usebiodataserver.use(middleware)
biodataserver.use(middleware)
biodataserver.use(router)


//3- set port for thse server
const PORT=4000 || process.env.PORT

// 4- listen to request from frontend and they resolve it
 biodataserver.listen(PORT,()=>{
    console.log(`server running successfully on port number ${PORT}`);
    
 })