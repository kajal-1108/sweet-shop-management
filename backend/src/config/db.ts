import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  const uri = process.env.MONGO_URI || 'mongodb+srv://kajal11metkar_db_user:ZtXmM6FxFwYuqCLF@cluster0.9qk50go.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);

    console.log('MongoDB connected');
  } catch (err: any) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
