import express from "express"
import dotenv from 'dotenv'

import studentRouter from './routes/student_routes.js'

import studentRoutes from './routes/student_routes.js'
import teacherRoutes from './routes/teacher_route.js'
import courseRoutes from './routes/course_route.js'
import enrollmentRoutes from './routes/enrollment_route.js'
import departmentRoutes from './routes/department_route.js'
dotenv.config()

let app = express();

app.use(express.json())

app.use("/student", studentRouter)

let PORT = process.env.PORT || 8888

app.get("/", (req, res) => {
    res.json({
        message: "server initial routes called successfully"
    })
})

app.post("/", (req, res) => {
    let data = req.body

    res.json({
        message: " student created successfully",
        data: data,
    })
})

app.get("/:id", (req, res) => {
    let id = req.params.id

    res.json({
        message: "student found successfully",
        id: id,
    })
})

app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);
app.use('/departments', departmentRoutes);

app.listen(PORT, () => {
    console.log("server started at " + PORT)
})