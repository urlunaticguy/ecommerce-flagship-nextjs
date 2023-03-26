import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
});

const Test = models.Test || model("Test", testSchema);
// first run - there is no model
// models.Test will give null
// first run e it will create a models.Test

export default Test;
