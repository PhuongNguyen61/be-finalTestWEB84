import TeacherPositionModel from "../models/teacherPosition.js"

const teacherPositionController = {
    getListTeacherPosition: async (req, res) => {
        try {
            const listTeacherPosition = await TeacherPositionModel.find()
            res.status(200).send({
                message: 'Successful!',
                data: listTeacherPosition
            })
        } catch (error) {
            res.status(403).send({
                message: error.message
            })
        }
    },
    createTeacherPosition: async (req, res) => {
        try {
            const {code} = req.body
            const check = await TeacherPositionModel.findOne({code})
            if (check) throw new Error('code đã tồn tại!')
            const newTeacherPosition = await TeacherPositionModel.create({
                ...req.body,
                isDeleted: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            res.status(201).send({
                message: 'Successful!',
                data: newTeacherPosition
            })
        } catch (error) {
            res.status(403).send({
                message: error.message
            })
        }
    }
}

export default teacherPositionController