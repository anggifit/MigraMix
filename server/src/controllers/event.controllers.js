import pool from "../db.js";

export const createEventByOrganizer = async (req, res) => {
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
  VALUES ($1,$2,$3,$4,$5,$6, $7, $8, $9) RETURNING *`;

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
        res.status(200).json({ message: "Evento creado.", event: rows[0] });
        console.log(rows[0].id); // id del evento creado
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

export const editEventByOrganizer = async (req, res) => {
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
        eventId,
        eventTitle,
        eventDescription,
        urlEvent,
        typeOfActivity,
        artistEvent,
        initialDate,
        finalDate,
        eventImage,
      } = req.body;

      let query = `INSERT INTO events (id,organizer_id, eventTitle,eventDescription,urlEvent,typeOfActivity,artistEvent,initialDate,finalDate,eventImage) 
  VALUES ($1,$2,$3,$4,$5,$6, $7, $8, $9, $10) 
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
 RETURNING *`;

      try {
        const { rows } = await pool.query(query, [
          eventId,
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
        console.log("Filas devueltas:", rows);
        console.log("Evento creado / actualizado:", rows[0].id);
        res
          .status(200)
          .json({ message: "Evento creado / actualizado.", event: rows[0] });
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

  try {
    const result = await pool.query(
      "SELECT * FROM events INNER JOIN organizer ON id_user = organizer_id WHERE organizer_id = $1;",
      [userId]
    );

    if (result.rows && result.rows.length > 0) {
      console.log(result.rows[0].id);
      res.status(200).json(result.rows);
    } else {
      res
        .status(404)
        .json({ message: "No se encontraron eventos para el organizador" });
    }
  } catch (error) {
    console.log("Error query insert : ", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getEventById = async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Token de autorización no proporcionado" });
    }

    const userId = req.userId;
    const eventId = req.params.eventId;

    console.log(`Este es el id del usuario: ${userId}`);
    console.log(`Este es el id del evento: ${eventId}`);

    const userResult = await pool.query(
      "SELECT * FROM users WHERE id = $1 AND role='Organizer'",
      [userId]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({
        message: "Debe ser organizador para poder editar un evento.",
      });
    } else {
      const response = await pool.query("SELECT * FROM events WHERE id = $1", [
        eventId,
      ]);

      console.log("Evento traido correctamente:", response.rows);
      res.status(200).json(response.rows);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error de servidor");
  }
};

export const getAllEvents = async (req, res) => {
  const result = await pool.query("SELECT * FROM events");
  try {
    /* console.log(result.rows[0].id); */
    console.log(result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log("Error query insert : ", error);
    res.status(500).json(error.detail);
    return res.sendStatus(403);
  }
};

export const deleteEventByOrganizer = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token de autorización no proporcionado" });
  }
  const userId = req.userId;
  const eventIdToDelete = req.params.eventId;
  console.log(userId);
  console.log(eventIdToDelete);
  try {
    const userResult = await pool.query(
      "SELECT * FROM users WHERE id = $1 AND role='Organizer'",
      [userId]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({
        message: "Debe ser organizador para poder eliminar un evento.",
      });
    } else {
      await pool.query("DELETE FROM events WHERE id = $1", [eventIdToDelete]);

      console.log("Evento eliminado correctamente:", eventIdToDelete);
      res.json(`Event ${eventIdToDelete} eliminado exitosamente.`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error de servidor");
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
