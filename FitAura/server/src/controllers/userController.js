import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (user) =>
  jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const normalizedName = name?.trim();
    const normalizedEmail = email?.trim().toLowerCase();
    const normalizedPassword = password?.trim();

    if (!normalizedName || !normalizedEmail || !normalizedPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) return res.status(409).json({ message: "User already exists" });

    const user = await User.create({
      name: normalizedName,
      email: normalizedEmail,
      password: normalizedPassword
    });

    return res.status(201).json({
      token: generateToken(user),
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    return res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email?.trim().toLowerCase();
    const normalizedPassword = password?.trim();

    if (!normalizedEmail || !normalizedPassword) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(normalizedPassword);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    return res.json({
      token: generateToken(user),
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    return res.status(500).json({ message: "Login failed", error: error.message });
  }
};
