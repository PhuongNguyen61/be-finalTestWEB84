import mongoose from 'mongoose'

const teacherPositionSchema = new mongoose.Schema({
    name: String,
    code: String,
    des: String,
    isActive: Boolean,
    isDeleted: Boolean,
    createdAt: Date,
    updatedAt: Date,
})

const TeacherPositionModel = mongoose.model('teacherPositions', teacherPositionSchema)
export default TeacherPositionModel