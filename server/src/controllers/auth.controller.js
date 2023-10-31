import bcrypt from "bcryptjs";
import pool from "../db.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { firstName, lastName, username, email, password, dateOfBirth, role } =
    req.body;
  let query = `INSERT INTO users (first_name,last_name,username,email,password,dateOfBirth,role) VALUES ($1,$2,$3,$4,$5,$6, $7) RETURNING id`;
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
    const userId = rows[0].id;
    console.log(userId);
    if (role === "Artist") {
      await pool.query("INSERT INTO artists (users_id) VALUES ($1)", [userId]);
    } /*else if (role === "organiser") {
      await pool.query(
        "INSERT INTO organiser (user_id, información_adicional_organiser) VALUES ($1, $2...)",
        [userId, "Información adicional del organiser"]
      );
    }*/
    return res.sendStatus(201);
    // if(!rows) return res.sendStatus(404)
  } catch (error) {
    console.log("Error query insert : ", error);
    // res.status(500).json(error.detail);
    return res.sendStatus(500);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const user = result.rows[0];

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // si autenticación es OK genero token
      const generateToken = (userId) => {
        const secretKey = process.env.TOKEN_SECRET;
        const expiresIn = "1h";

        return jwt.sign({ userId }, secretKey, { expiresIn });
      };

      const token = generateToken(user.id);
      res.json({ message: "Autenticación exitosa", token });
    } else {
      // contraseña incorrecta
      res.status(401).json({ message: "Contraseña incorrecta" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error de servidor");
  }
};

export const getProfileByArtist = async (re, res) => {
  const id = req.params.id;
  const response = await pool.query("SELECT * FROM artist WHERE id=$1", [id]);
  console.log(response.rows);
  res.status(200).json(response.rows);
};

export const getArtistList = async (re, res) => {
  const response = await pool.query("SELECT * FROM artists");
  console.log(response.rows);
  res.status(200).json(response.rows);
};
