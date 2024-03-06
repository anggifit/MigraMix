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

server.use(
  cors({
    origin: "https://migra-1sx8vnhmf-anggifits-projects.vercel.app", //verificar la direccion localhost que se indica al levantar el cliente 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

server.use(express.json());

server.use("/api", authRouter);
server.use("/api/organizers", organizerRoutes);
server.use("/api/artists", artistRoutes);
server.use("/api/events", eventsRoutes);

export default server;
