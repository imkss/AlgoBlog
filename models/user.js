import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is requried!"],
    unique: [true, "Email already exists!"],
  },
  username: {
    type: String,
    required: [true, "Username is requried!"],
    unique: [true, "Username already exists!"],


  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", userSchema);
export default User;