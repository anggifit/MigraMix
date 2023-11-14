import pool from "../db.js";

export const eventsById = async (req, res) => {
  const id = req.userId;
  console.log(id);

  let query = `select * 
  from organizer o 
  inner join events e 
      on o.id_user = e.organizer_id 
  inner join event_by_artist ea
      on e.id = ea.id
  inner join artists a
      on a.id = ea.event_by_artist_id
  where o.id_user = $1`;
  try {
    const { rows } = await pool.query(query, [id]);
    if (!rows.length) {
      console.log("error: Failed to lister evebts");
      return res.sendStatus(400);
    }
    console.log(rows);
    return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateEvent = async (req, res) => {
  const { eventtitle, urlevent, id } = req.body;

  let query = `UPDATE events SET eventtitle=$1, urlevent=$2 WHERE id=$3  RETURNING *`;
  try {
    const { rows } = await pool.query(query, [eventtitle, urlevent, id]);
    if (!rows.length) {
      console.log("error: Failed to updater event");
      return res.sendStatus(422);
    }
    console.log(rows);
    return res.status(200).json(rows[0]);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const eventByTypeofactivity = async (req, res) => {
  const { type } = req.params;

  let query = `select * from events where typeofactivity = $1`;
  try {
    const { rows } = await pool.query(query, [type]);
    if (!rows.length) {
      console.log("error: Failed to find type event");
      return res.sendStatus(422);
    }
    console.log(rows);
    return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
