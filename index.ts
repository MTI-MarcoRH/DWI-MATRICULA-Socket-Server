import Server from "./classes/server";
import   router   from './routes/router';
import bodyParser from "body-parser";
import cors from 'cors' 

const server = Server.instance;

//Body parser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//cors
server.app.use(cors({origin:true, credentials: true}));
server.app.use('/',router)

server.start(()=>{
    console.log(`El servidor esta corriendo en el puerto ${server.port}`);
})


