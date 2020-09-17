import "dotenv/config";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User";

class SessionController {
  async show(req, res) {
    if (req.userId === undefined) return res.status(500).send("Não existe sessão!");

    const users = await User.find({ _id: req.userId });

    return res.json({ user: users });
  }

  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).send("Usuario não existe!");

    const isPasswordCorrect = bcrypt.compare(password, user.passwordHash);

    if (!isPasswordCorrect) return res.status(401).send("Senha invalida!");

    return res.json({
      access_token: jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      }),
    });
  }
}

export default new SessionController();
