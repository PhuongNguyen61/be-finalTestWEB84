import { Router } from "express"
import RouterV1 from "./v1/index.js"
const RootRouter = Router()

RootRouter.use('/v1', RouterV1)
export default RootRouter