import mongoose from 'mongoose'

const degreeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: false
    },
    school: String,
    major: String,
    year: Number,
    isGraduated: Boolean
})

const teacherSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    isActive: Boolean,
    isDeleted: Boolean,
    code: String,
    startDate: Date,
    endDate: Date,
    teacherPositionsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacherPositions'
    }],
    degrees: [degreeSchema],
    createdAt: Date,
    updatedAt: Date,
})
const TeacherModel = mongoose.model('teachers', teacherSchema)
export default TeacherModel