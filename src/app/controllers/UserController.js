import User from "../models/User";

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    const { _id } = user;

    return res.json({ _id });
  }
}

export default new UserController();
