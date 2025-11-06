import e, { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../login/login.js";
import jwt from "jsonwebtoken";

interface JwtPayload {
  username: string;
  role: string;
  iat: number;
  exp: number;
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
}

export function checkIfAdmin(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"];
  console.log("token en middleware admin:", token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

  req.user.role === "admin"
    ? next()
    : res.status(403).json({ message: "Access denied" });

  //   const user = req.headers["is-admin"];
  //   console.log("usuario: ", user);
  //   if (user && user === "true") {
  //     next();
  //   } else {
  //     res.status(403).json({ message: "Access denied" });
  //   }
}
