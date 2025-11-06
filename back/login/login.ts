import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const JWT_SECRET = "my-key";

const mockUser = {
  username: "felix",
  password: "toledo",
  role: "admin",
};

export function loginHandler(req: Request, res: Response) {
  const { username, password } = req.body;
  console.log("login attempt:", username, password);
  if (username === mockUser.username && password === mockUser.password) {
    const payload = {
      username: mockUser.username,
      role: mockUser.role,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
