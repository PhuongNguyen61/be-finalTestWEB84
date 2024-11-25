import { Router } from "express"
import teacherPositionController from "../../controllers/teacherPosition.js"
import teacherPositionMiddleware from "../../middlewares/teacherPosition.js"

const TeacherPositionRouter = Router()

TeacherPositionRouter.get('', teacherPositionController.getListTeacherPosition)
TeacherPositionRouter.post('', teacherPositionMiddleware.createTeacherPosition,teacherPositionController.createTeacherPosition)

export default TeacherPositionRouter