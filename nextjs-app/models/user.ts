import { Schema, models, model, Model, Document } from "mongoose";

export interface UserInterface extends Document {
  email: string;
  username: string;
  imageUrl: string;
  dateOfBirth: string;
}
const userSchema = new Schema<UserInterface>({
  email: {
    type: String,
    required: [true, "Username is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  imageUrl: String,
  dateOfBirth: String,
});

export const User: Model<UserInterface> =
  models.User || model<UserInterface>("User", userSchema);
