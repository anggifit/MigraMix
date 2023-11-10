import pool from "../db.js";

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
        res.status(200).send("Usuario actualizado").json(rows[0]);
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
  //console.log(result.rows[0].first_name, `texto 1`);
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
