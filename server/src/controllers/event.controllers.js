import pool from "../db.js";

export const putEventByOrganizer = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token de autorización no proporcionado" });
  }

  const userId = req.userId;
  try {
    const userResult = await pool.query(
      "SELECT * FROM users WHERE id = $1 AND role='Organizer'",
      [userId]
    );

    if (userResult.rows.length === 0) {
      return res
        .status(401)
        .json({ message: "Debe ser organizador para poder crear un evento." });
    } else {
      const {
        eventTitle,
        eventDescription,
        urlEvent,
        typeOfActivity,
        artistEvent,
        initialDate,
        finalDate,
        eventImage,
      } = req.body;

      let query = `INSERT INTO events (organizer_id, eventTitle,eventDescription,urlEvent,typeOfActivity,artistEvent,initialDate,finalDate,eventImage) 
  VALUES ($1,$2,$3,$4,$5,$6, $7, $8, $9) 
  ON CONFLICT (id) DO UPDATE 
  SET  
  eventTitle=EXCLUDED.eventTitle, 
  eventDescription=EXCLUDED.eventDescription,
  urlEvent=EXCLUDED.urlEvent, 
  typeOfActivity=EXCLUDED.typeOfActivity, 
  artistEvent=EXCLUDED.artistEvent, 
  initialDate=EXCLUDED.initialDate, 
  finalDate=EXCLUDED.finalDate, 
  eventImage=EXCLUDED.eventImage
`;

      try {
        const { rows } = await pool.query(query, [
          userId,
          eventTitle,
          eventDescription,
          urlEvent,
          typeOfActivity,
          artistEvent,
          initialDate,
          finalDate,
          eventImage,
        ]);

        res.status(200).send("Evento creado / actualizado.").json(rows[0]);
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

export const getEventByOrganizer = async (req, res) => {
  const userId = req.userId;

  const result = await pool.query(
    "SELECT * FROM events INNER JOIN organizer ON id_user = organizer_id WHERE organizer_id = $1;",
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

export const getEventByArtist = async (req, res) => {
  const userId = req.userId;
  const result = await pool.query(
    "SELECT * FROM events INNER JOIN artists ON id_user = organizer_id WHERE organizer_id = $1;",
    [userId]
  );
  try {
    console.log(result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log("Error query insert : ", error);
    res.status(500).json(error.detail);
    return res.sendStatus(403);
  }
};
