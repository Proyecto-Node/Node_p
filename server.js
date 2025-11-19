import express from "express";
import tasksRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

// Rutas
app.use("/api", tasksRoutes);
app.use("/api", authRoutes);

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
