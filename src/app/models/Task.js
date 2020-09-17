import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default new model("Task", TaskSchema);
