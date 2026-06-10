import prisma from "../db/prisma.js"

let FindAllTeachers = async (req, res) => {
    let allTeachers = await prisma.teacher.findMany({
        include: {
            department: true,
            courses: true
        }
    })
    res.json({
        message: "all teachers found",
        data: allTeachers
    })
}

let FindTeacherById = async (req, res) => {
    let id = req.params.id
    let matchedTeacher = await prisma.teacher.findUnique({
        where: { id: Number(id) },
        include: {
            department: true,
            courses: true
        }
    })
    res.status(200).json({
        message: `teacher with id ${id} fetched successfully`,
        data: matchedTeacher
    })
}

let CreateTeacher = async (req, res) => {
    let { name, email, departmentId } = req.body
    let createdTeacher = await prisma.teacher.create({
        data: { name, email,
             department:{
                connect:{ id: Number(departmentId) } 
             } }
    })
    res.status(201).json({
        message: "teacher created successfully",
        data: createdTeacher
    })
}

let UpdateTeacher = async (req, res) => {
    let id = req.params.id
    let { name, email, departmentId } = req.body
    let updatedTeacher = await prisma.teacher.update({
        where: { id: Number(id) },
        data: { name, email,
             department:{
                connect:{ id: Number(departmentId) } 
             } }
    })
    res.status(200).json({
        message: `teacher with id ${id} updated successfully`,
        data: updatedTeacher
    })
}

let DeleteTeacher = async (req, res) => {
    let id = req.params.id
    let deletedTeacher = await prisma.teacher.delete({
        where: { id: Number(id) }
    })
    res.status(200).json({
        message: `teacher with id ${id} deleted successfully`,
        data: deletedTeacher
    })
}

export { FindAllTeachers, FindTeacherById, CreateTeacher, UpdateTeacher, DeleteTeacher }