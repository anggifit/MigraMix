import pool from "../db.js";

export const newOrganizer = async (req, res) => {
  const { id, eventPlannerBio, eventPlannerMainLink, eventProfilePicture } =
    req.body;
  let query = `INSERT INTO organizer (id_user,biography,main_link,picture) VALUES ($1,$2,$3,$4) RETURNING * `;
  try {
    const { rows } = await pool.query(query, [
      id,
      eventPlannerBio,
      eventPlannerMainLink,
      eventProfilePicture,
    ]);
    if (!rows.length) {
      console.log("error: Failed to register organizer");
      return res.sendStatus(422);
    }
    console.log(rows);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
