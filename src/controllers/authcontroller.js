import prisma from "../prisma/client.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validación básica
    if (!email || !password) {
      return res.status(400).json({ message: "Email y password son requeridos." });
    }

    // Validar email existente
    const userExists = await prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      return res.status(409).json({ message: "El correo ya está registrado." });
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    });

    return res.status(201).json({
      message: "Usuario registrado exitosamente",
      user: { id: user.id, email: user.email }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al registrar usuario", error });
  }
};
