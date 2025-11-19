import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js'; // <--- IMPORTA LAS RUTAS

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar JSON para POST/PUT
app.use(express.json());

// Rutas principales
app.get('/', (req, res) => {
  res.send('API running');
});

// Rutas de tareas (CRUD)
app.use(taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;