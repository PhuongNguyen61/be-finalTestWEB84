import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    address: String,
    identity: String,
    dob: Date,
    isDeleted: Boolean,
    role: {
        type: String,
        enum: ['STUDENT', 'TEACHER', 'ADMIN']
    },
    createdAt: Date,
    updatedAt: Date,
})

const UserModel = mongoose.model('users', userSchema)
export default UserModel