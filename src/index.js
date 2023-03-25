import server from "./server.js";

// --- conect to local mongodb
import { connect } from "./database.js";
connect();

//---- conect to mongo atlas
// In case you need to conect to mongo atlas comment line 3, and add:
// import "./database.js"

server.start( {port: 3000}, ( {port}) => {
    console.log('Server is running on' + port )
})

