import { Router } from "express";
import { CreateEnrollment, DeleteEnrollment, getEnrollments, getEnrollmentById, UpdateEnrollment } from "../handlers/enrollment_handler.js";
let router=Router()
router.get("/",getEnrollments)
router.get("/:id",getEnrollmentById)
router.post("/",CreateEnrollment)
router.put("/:id",UpdateEnrollment)
router.delete("/:id",DeleteEnrollment)
export default router