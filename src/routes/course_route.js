import express from "express"

const router = express.Router()

router.post("/", (req, res) => {
    res.json({ message: "Course created successfully" })
})

router.get("/", (req, res) => {
    res.json({ message: "Courses fetched successfully" })
})

export default router