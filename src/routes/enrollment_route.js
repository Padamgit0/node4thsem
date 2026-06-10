import express from "express"

const router = express.Router()

router.post("/", (req, res) => {
    res.json({ message: "Enrollment created successfully" })
})

router.get("/", (req, res) => {
    res.json({ message: "Enrollments fetched successfully" })
})

export default router