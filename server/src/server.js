import express from "express";

/* Morgan es un paquete de logging http */
import morgan from "morgan";

import authRouter from "./routes/auth.router.js";

const server = express();
server.use(morgan("dev"));
server.use(express.json()); // expres podra convertir reques de cliente en json, sino es udefined

server.use("/api", authRouter);

export default server;
