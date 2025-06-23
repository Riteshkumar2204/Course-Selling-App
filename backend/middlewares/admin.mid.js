import jwt from "jsonwebtoken";
import config from "../config.js";

function adminMiddleware(req, res, next) {
  
  const authHeader = req.headers.authorization;
console.log("authHeader:", authHeader);

if (!authHeader || !authHeader.toLowerCase().startsWith("bearer ")) {
  return res.status(401).json({ errors: "Authorization header malformed or missing" });
}

const token = authHeader.replace(/Bearer\s+/i, '').trim(); // safer handling

if (!token) {
  return res.status(401).json({ errors: "Token not found after Bearer" });
}




  try {
    const decoded = jwt.verify(token, config.JWT_ADMIN_PASSWORD);
    console.log("Decoded Token Payload:", decoded);

    req.adminId = decoded.id;
    next();
  } catch (error) {
    console.log("Error in user middleware:", error.message);
    return res.status(401).json({ errors: "Invalid or expired token" });
  }
}

export default adminMiddleware;
