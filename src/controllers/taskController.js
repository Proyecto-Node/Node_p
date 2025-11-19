import prisma from "../prisma/client.js";

// GET /tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas", error });
  }
};

// POST /tasks
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await prisma.task.create({
      data: { title, description },
    });

    res.status(201).json(task);

  } catch (error) {
    res.status(500).json({ message: "Error al crear tarea", error });
  }
};

// PUT /tasks/:id
export const updateTask = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, description } = req.body;

    const updated = await prisma.task.update({
      where: { id },
      data: { title, description },
    });

    res.status(200).json(updated);

  } catch (error) {
    res.status(500).json({ message: "Error al actualizar tarea", error });
  }
};

// DELETE /tasks/:id
export const deleteTask = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.task.delete({
      where: { id },
    });

    res.status(200).json({ message: "Tarea eliminada" });

  } catch (error) {
    res.status(500).json({ message: "Error al eliminar tarea", error });
  }
};
