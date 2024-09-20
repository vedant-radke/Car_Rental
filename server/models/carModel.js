import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    rentalPricePerDay: {
        type: Number,
        required: true,
    },
    fuelType: {
        type: String,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    availability: {
        type: Boolean,
        default: true,
    },
    mileage: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    images: {
        type: [String],
    },
    currentLocation: {
        type: String,
        required: true,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

export const Car = mongoose.model("Car", carSchema);
