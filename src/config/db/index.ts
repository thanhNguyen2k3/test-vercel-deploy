require('dotenv').config();
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://user2003:19112k3az@cluster0.2sa2hsu.mongodb.net/my-database?retryWrites=true&w=majority',
        );

        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failed');
    }
};
