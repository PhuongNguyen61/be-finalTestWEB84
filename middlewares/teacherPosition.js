import TeacherPositionModel from "../models/teacherPosition.js"

const teacherPositionMiddleware = {
    createTeacherPosition: async (req, res, next) => {
        try {
            const {name, code, des, isActive} = req.body
            if (!name) throw new Error('name is missing!')
            if (!code) throw new Error('code is missing!')
            if (!des) throw new Error('des is missing!')
            if (!isActive) throw new Error('isActive is missing!')
            return next()
        } catch (error) {
            res.status(403).send({
                message: error.message
            })
        }
    }
}

export default teacherPositionMiddleware