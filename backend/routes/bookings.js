const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Event = require("../models/Event");
const { protect } = require("../middleware/authMiddleware");


router.post("/:eventId", protect, async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (event.seats <= 0) return res.status(400).json({ message: "No seats left" });

    const booking = await Booking.create({
      user: req.user._id,
      event: event._id,
    });

    
    event.seats -= 1;
    await event.save();

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get("/", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("event");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
