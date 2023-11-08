import bcrypt from "bcryptjs";
import pool from "../db.js";
import { generateToken } from "../middleware/auth.middleware.js";

export const signUp = async (req, res) => {
  const { firstName, lastName, username, email, password, dateOfBirth, role } =
    req.body;
  let query = `INSERT INTO users (first_name,last_name,username,email,password,dateOfBirth,role) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id`;
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const { rows } = await pool.query(query, [
      firstName,
      lastName,
      username,
      email,
      passwordHash,
      dateOfBirth,
      role,
    ]);
    return res.sendStatus(201);
    // if(!rows) return res.sendStatus(404)
  } catch (error) {
    console.log("Error query insert : ", error);
    // res.status(500).json(error.detail);'
    console.log(error);
    return res.sendStatus(500);
  }
};

export const signIn = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res
        .status(401)
        .json({ message: "Usuario o contraseña no válidos" });
    }

    const user = result.rows[0];
    console.log(user);

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = generateToken(user.id);
      res
        .status(200)
        .json({ message: "Autenticación exitosa", token, role: user.role });
    } else {
      res.status(401).json({ message: "Usuario o contraseña no válidos" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error de servidor");
  }
};
