import { User } from "../models/UserModel.js";
import bcrypt from "bcrypt";

//GET THE USER PROFILE :
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); //excluding password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(400).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//UPDATE USER PROFILE
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { fullname, email } = req.body;

    if (email && email !== user.email) {
      const isExist = await User.findOne({ email });
      if (isExist) {
        res.status(400).json({ message: "email already in Use" });
      }
      user.email = email;
    }

    //what else to change
    if (fullname) {
      user.fullname = fullname;
    }

    const updatedUser = await user.save(); //saving updated info to DB
    res.json({
      //sending new updated data as response
      id: updatedUser._id,
      fullname: updatedUser.fullname,
      email: updatedUser.email,
      role: updatedUser.role,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//UPDATE USER PASSWORD
export const updatePassword = async (req, res) => {
  const { currPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(currPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE USER ACCOUNT
export const deleteUserAccount = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(req.user.id);

    res.json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error("Error deleting user account:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

//View Booking History (GET /api/users/:id/bookings)

//Make a New Booking (POST /api/bookings)

//Cancel Booking (DELETE /api/bookings/:bookingId)

//Forgot Password (POST /api/users/forgot-password)

//Reset Password (PUT /api/users/reset-password/:token)
  // Enables the consumer to reset their password using the token sent to their email after the "forgot password" request.

//Leave a Review (POST /api/cars/:carId/reviews)

