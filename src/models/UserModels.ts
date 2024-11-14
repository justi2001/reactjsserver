import mongoose from "mongoose";
const UserScheme = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  rule: {
    type: Number,
    default: 1
  },
  createAt: {
    type: String,
    require: Date.now()
  },
  updateAt: {
    type: Date,
    require: Date.now()
  }
})

const UserModel = mongoose.model("users", UserScheme)

export default UserModel