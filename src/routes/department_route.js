import { CreateStudent, DeleteStudent, FindAllStudents, FindStudentById, UpdateStudent } from "../handlers/handlers.js"
import router from "./routes.js"
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