import TeacherModel from "../models/teacher.js"
import UserModel from "../models/user.js"
import TeacherPositionModel from "../models/teacherPosition.js"

const teacherController = {
    getListTeacher: async (req, res) => {
        try {
            const page = req.query.page
            const limit = req.query.limit
            const totalItems = await TeacherModel.countDocuments()
            const totalPages = Math.ceil(totalItems / limit)
            const skip = (page - 1) * limit
            console.log(totalItems, totalPages, skip)
            if (page > totalPages) throw new Error('Không tồn tại page này!')
            const teachers = await TeacherModel.find({})
            .skip((page - 1) * limit)
            .limit(limit)
            .populate('userId')
            .populate('teacherPositionsId')
            .populate('degrees')
            const listTeacher = teachers.map(teacher => ({
                code: teacher.code,
                name: teacher.userId?.name,
                email: teacher.userId?.email,
                phoneNumber: teacher.userId?.phoneNumber,
                address: teacher.userId?.address,
                isActive: teacher.isActive,
                positions: teacher.teacherPositionsId.map(position => position.name),
                degrees: teacher.degrees
            }))
            res.status(200).send({
                message: 'Successful!',
                data: listTeacher
            })   
        } catch (error) {
            res.status(403).send({
                message: error.message,
            })
        }
    },
    createTeacher: async (req, res) => {
        try {
            const {name, email, phoneNumber, dob, identity, address, degrees, des} = req.body
            const checkUser = await UserModel.findOne({email})
            if (checkUser) throw new Error('Email already exists!')
                const generateRandomString = (length, chars) => {
            const randomChars = new Array(length).fill(null).map(() => {
                const randomIndex = Math.floor(Math.random() * chars.length)
                return chars.charAt(randomIndex);
            })
            return randomChars.join('')
            }
            const code = generateRandomString(10, '0123456789')
            const checkCode = await TeacherModel.findOne({code})
            if (checkCode) throw new Error('Code already exists!')
            const checkPosition = await TeacherPositionModel.findOne({des})
            if (!checkPosition) throw new Error('This position does not exist!')
            const newUser = await UserModel.create({
                name,
                email,
                phoneNumber,
                dob,
                identity,
                address,
                isDeleted: false,
                role: "TEACHER",
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            const newTeacher = await TeacherModel.create({
                userId: newUser._id,
                code,
                isActive: true,
                isDeleted: false,
                startDate: new Date(),
                teacherPositionsId: checkPosition._id,
                degrees,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            res.status(201).send({
                message: "Successful!",
                data: newTeacher
            })
        } catch (error) {
            res.status(403).send({
                message: error.message,
            })
        }
    }
}

export default teacherController