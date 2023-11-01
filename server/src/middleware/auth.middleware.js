import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1]; //modifique la estructura del token, para que no sea 'Bearer token'.

  if (!token)
    return res
      .status(401)
      .json({ message: "Acceso no autorizado. Token requerido" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token invalido." });
    }
    console.log(user);
    req.user = user;
    next();
  });
};
