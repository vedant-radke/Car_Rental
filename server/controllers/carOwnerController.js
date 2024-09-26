import { Car } from "../models/carModel.js";


// Manage Owned Cars:
// getOwnedCar(ownerId): Fetch car with reg. No. .
export const getOwnedCar = async (req, res) => {
  try {
    const { regNumber } = req.body; 
    const ownerId = req.user.id; 

    if (!regNumber) {
      return res.status(400).json({ message: "Registration number is required." });
    }

    const car = await Car.findOne({ regNumber, ownerId }); 

    if (!car) {
      return res.status(200).json({ message: "No car with this registraion No.." });
    }

    res.status(200).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Unable to fetch cars." });
  }
};


//getOwnedCars - all the cars of owner
export const getAllOwnedCars = async (req, res) => {
  try {
    const ownerId = req.user.id; 

    const cars = await Car.find({ownerId}); 

    if (cars.length === 0) {
      return res.status(200).json({ message: "No cars have been added yet." });
    }

    res.status(200).json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Unable to fetch cars." });
  }
};


// addCar(carDetails): Allow the owner to add new cars to the platform.
export const addCar = async (req, res) => {
  try {

    const {
      brand,
      model,
      year,
      regNumber,
      type,
      color,
      rentalPricePerDay,
      fuelType,
      transmission,
      seats,
      status,
      mileage,
      description,
      images,
      currentLocation,
    } = req.body;

    const ownerId = req.user?._id; 

    if (!regNumber) {
      return res.status(400).json({ message: 'Registration number is required' });
    }

    const isCarExist = await Car.findOne({ regNumber });
    if (isCarExist) {
      return res.status(400).json({ message: 'Car with this registration number already exists' });
    }

    const newCar = new Car({
      brand,
      model,
      year,
      regNumber,
      type,
      color,
      rentalPricePerDay,
      fuelType,
      transmission,
      seats,
      status,
      mileage,
      description,
      images,
      currentLocation,
      ownerId,
    });


    await newCar.save();

    return res.status(201).json({
      message: 'Car added successfully',
      car: newCar,
    });
  } catch (error) {
    console.error("Error while adding car:", error);

    // Add more detailed error message
    return res.status(500).json({
      message: 'Failed to add car',
      error: error.message,
    });
  }
};

// export const addCar = async (req, res) => {
//   try {
//     const newCar = new Car(req.body);
//     await newCar.save();
//     res.status(201).json({ success: true, message: 'Car added successfully' });
//   } catch (error) {
//     if (error.code === 11000) {
//       res.status(400).json({ success: false, message: 'Car with this registration number already exists' });
//     } else {
//       res.status(500).json({ success: false, message: 'Server error' });
//     }
//   }
// };




// removeCar(regNumber): Allow the owner to remove cars from the platform.
export const deleteCar = async (req, res) => {
  try {
    const { regNumber } = req.body;

    if (!regNumber) {
      return res.status(400).json({ message: "Registration number is required." });
    }

    const deletedCar = await Car.deleteOne({ regNumber });

    if (deletedCar.deletedCount === 0) { //deleteCount = tells count of deleted entries
      return res.status(404).json({ message: "Car not found." });
    }

    res.status(200).json({ message: "Car has been deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Unable to delete the car." });
  }
};


// updateCarDetails(carId, updatedDetails): Edit details of cars owned by the owner.
export const updateCarDetails = async (req, res) => {
  const { regNumber } = req.body;
  try {
    const car = await Car.findOne({ regNumber });
    if (!car) {
      return res.status(404).json({ message: "Car not found with this registration number." });
    }

    // Use Object.assign to update only provided fields
    Object.assign(car, req.body);

    const updatedCar = await car.save(); // Save updated car details

    res.status(200).json({
      message: "Car details updated successfully",
      car: updatedCar
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error. Unable to update car details." });
  }
};


// Handle Bookings for Owned Cars:
// getBookingsForCars(ownerId): Fetch bookings made for the cars owned by the owner.
// approveBooking(bookingId): Approve a pending booking (if needed).
// declineBooking(bookingId): Decline a booking request.
// View Revenue:
// getOwnerRevenue(ownerId): View revenue generated from the cars owned by the owner.
