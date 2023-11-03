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
//user = {  "userId": 3,  "userRole": "Artist",  "iat": 1699027044,  "exp": 1699030644}
    req.userId = user.userId;
    next();
  });
};

export const generateToken = (userId, userRole) => {
  const secretKey = process.env.TOKEN_SECRET;
  const expiresIn = "1h";
  return jwt.sign({ userId, userRole }, secretKey, { expiresIn });
};
