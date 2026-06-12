import { CreateStudent, DeleteStudent, FindAllStudents, FindStudentById, UpdateStudent } from "../handlers/handlers.js"
import {Router} from "express"
const router = Router()
router.get(
    "/", FindAllStudents  
)
router.get(
    "/:id",     
    FindStudentById
)
router.post(    
    "/",        
    CreateStudent
)
router.put(         
     "/:id",
    UpdateStudent
)

export default router