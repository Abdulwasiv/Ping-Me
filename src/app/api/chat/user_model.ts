import mongoose from "mongoose";

// Define schema and model for Customer
const customerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const CustomerModel = mongoose.models.Customer || mongoose.model('Customer', customerSchema);

// Define schema and model for BusinessOwner
const businessOwnerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  businessName: { type: String, required: true },
  businessCategory: { type: String, required: true },
  password: { type: String, required: true }
});

const BusinessOwnerModel = mongoose.models.BusinessOwner || mongoose.model('BusinessOwner', businessOwnerSchema);

module.exports = { CustomerModel, BusinessOwnerModel };
