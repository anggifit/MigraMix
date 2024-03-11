import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import organizerRoutes from "./routes/organizer.routes.js";
import artistRoutes from "./routes/artist.routes.js";
import eventsRoutes from "./routes/event.routes.js";

dotenv.config();

const server = express();
server.use(morgan("dev"));

const allowedOrigins = [
  "https://migra-mix-git-main-anggifits-projects.vercel.app",
  "http://localhost:5173", //verificar la direccion localhost que se indica al levantar el cliente
];

server.use(
  cors({
    origin: allowedOrigins,  
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

server.use(express.json());

server.use("/api", authRouter);
server.use("/api/organizers", organizerRoutes);
server.use("/api/artists", artistRoutes);
server.use("/api/events", eventsRoutes);

export default server;
