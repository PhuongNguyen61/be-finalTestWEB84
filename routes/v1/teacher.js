import { Router } from "express"
import teacherController from "../../controllers/teacher.js"
import teacherMiddleware from "../../middlewares/teacher.js"

const TeacherRouter = Router()

TeacherRouter.get('', teacherController.getListTeacher)
TeacherRouter.post('', teacherMiddleware.createTeacher, teacherController.createTeacher)

export default TeacherRouter