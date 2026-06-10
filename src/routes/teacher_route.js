import express from "express"

const router = express.Router()

router.post("/", (req, res) => {
    res.json({ message: "Teacher created successfully" })
})

router.get("/", (req, res) => {
    res.json({ message: "Teachers fetched successfully" })
})

export default router