import dotenv from "dotenv";
import moment from "moment";
import Server from "./server";

dotenv.config();

moment.locale("es");

const server = new Server();

server.listen();
