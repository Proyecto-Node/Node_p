import express from "express";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(express.json());

// rutas
app.use("/api", tasksRoutes);

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
