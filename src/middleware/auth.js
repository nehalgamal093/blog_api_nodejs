import jwt from "jsonwebtoken";

export const userAuth = (req, res, next) => {
  const token  = req.header('token');
  jwt.verify(token, "thesecretword", async function (err, decoded) {
    if (err) {
      res.json({ message: "Token error or token not provided", err });
    } else {
      req.userId = decoded.userId;
      next();
    }
  });
};
