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

export const putProfileByArtist = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token de autorización no proporcionado" });
  }

  const userId = req.userId;
  //console.log(userId);
  try {
    const userResult = await pool.query(
      "SELECT * FROM users WHERE id = $1 AND role='Artist'",
      [userId]
    );
    //console.log(userId);
    //console.log(userResult.rows[0].role);

    if (userResult.rows.length === 0) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    } else {
      const {
        ArtistsProfilePicture,
        ArtistBio,
        ArtistMainLink,
        ArtistSecundaryLink,
        ArtistThirdLink,
        MusicGenre,
        Performance,
        Type_of_performance,
        ContactNumber,
      } = req.body;

      let query = `INSERT INTO artists (id, ArtistsProfilePicture, ArtistBio,ArtistMainLink,ArtistSecundaryLink,ArtistThirdLink,MusicGenre,Performance,Type_of_performance,ContactNumber) 
  VALUES ($1,$2,$3,$4,$5,$6, $7, $8, $9, $10) 
  ON CONFLICT (id) DO UPDATE 
  SET 
  ArtistsProfilePicture=EXCLUDED.ArtistsProfilePicture, 
  ArtistBio=EXCLUDED.ArtistBio, 
  ArtistMainLink=EXCLUDED.ArtistMainLink,
  ArtistSecundaryLink=EXCLUDED.ArtistSecundaryLink, 
  ArtistThirdLink=EXCLUDED.ArtistThirdLink, 
  MusicGenre=EXCLUDED.MusicGenre, 
  Performance=EXCLUDED.Performance, 
  Type_of_performance=EXCLUDED.Type_of_performance, 
  ContactNumber=EXCLUDED.ContactNumber
`;

      try {
        const { rows } = await pool.query(query, [
          userId,
          ArtistsProfilePicture,
          ArtistBio,
          ArtistMainLink,
          ArtistSecundaryLink,
          ArtistThirdLink,
          MusicGenre,
          Performance,
          Type_of_performance,
          ContactNumber,
        ]);
        res.status(200).json(rows[0]);
      } catch (error) {
        console.log("Error query insert : ", error);
        res.status(500).json(error.detail);
        return res.sendStatus(500);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error de servidor");
  }
};

export const getProfileArtist = async (req, res) => {
  //const token = req.headers.authorization;
  const userId = req.userId;

  // if (!token) {
  //   return res
  //     .status(401)
  //     .json({ message: "Token de autorización no proporcionado" });
  // }
  const result = await pool.query(
    "SELECT * FROM artists INNER JOIN users ON users.id = artists.id WHERE artists.id = $1 AND role='Artist'",
    [userId]
  );
  //console.log(result.rows[0].firstName);
  try {
    console.log(result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log("Error query insert : ", error);
    res.status(500).json(error.detail);
    return res.sendStatus(403);
  }
};

export const getArtistList = async (req, res) => {
  const response = await pool.query("SELECT * FROM artists");
  console.log(response.rows);
  res.status(200).json(response.rows);
};
