import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordHash: String,
});

UserSchema.pre("save", async function () {
  if (this.password) this.passwordHash = await bcrypt.hash(this.password, 12);
  this.password = undefined;
});

export default model("User", UserSchema);
