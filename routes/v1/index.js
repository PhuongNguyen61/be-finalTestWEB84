import { Router } from "express"
import TeacherRouter from "./teacher.js"
import TeacherPositionRouter from "./teacherPosition.js"

const RouterV1 = Router()

RouterV1.use('/teachers', TeacherRouter)
RouterV1.use('/teacher-positions', TeacherPositionRouter)

export default RouterV1