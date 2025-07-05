import mongoose from 'mongoose';
console.log(process.env.MONGO_URI);
const connectDB = async () => {
  try {
   const conn= await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected successfully ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the process with failure
  }
}

export default connectDB;