import mongoose from "mongoose";

let Employee;

if (mongoose.models && mongoose.models.Employee) {
  Employee = mongoose.models.Employee;
} else {
  const employeeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    active: Boolean,
    role: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  });
  Employee = mongoose.model("Employee", employeeSchema);
}

export default Employee;
