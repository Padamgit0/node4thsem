import prisma from "../db/prisma.js"

let FindAllCourses = async (req, res) => {
    let allCourses = await prisma.course.findMany({
        include: {
            teacher: true,
            enrollments: true
        }
    })
    res.json({
        message: "all courses found",
        data: allCourses
    })
}

let FindCourseById = async (req, res) => {
    let id = req.params.id
    let matchedCourse = await prisma.course.findUnique({
        where: { id: Number(id) },
        include: {
            teacher: true,
            enrollments: true
        }
    })
    res.status(200).json({
        message: `course with id ${id} fetched successfully`,
        data: matchedCourse
    })
}

let CreateCourse = async (req, res) => {
    let { name, credits, teacher_id } = req.body
    let createdCourse = await prisma.course.create({
        data: { name, credits, 
            teacher:{
                connect:{ id: Number(teacher_id) }
            } }
    })
    res.status(201).json({
        message: "course created successfully",
        data: createdCourse
    })
}

let UpdateCourse = async (req, res) => {
    let id = req.params.id
    let { name, credits, teacher_id } = req.body
    let updatedCourse = await prisma.course.update({
        where: { id: Number(id) },
        data: { name, credits, 
            teacher:{
                connect:{ id: Number(teacher_id) }
            } }
    })
    res.status(200).json({
        message: `course with id ${id} updated successfully`,
        data: updatedCourse
    })
}

let DeleteCourse = async (req, res) => {
    let id = req.params.id
    let deletedCourse = await prisma.course.delete({
        where: { id: Number(id) }
    })
    res.status(200).json({
        message: `course with id ${id} deleted successfully`,
        data: deletedCourse
    })
}

export { FindAllCourses, FindCourseById, CreateCourse, UpdateCourse, DeleteCourse }