import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export const createDepartment = async (req, res) => {
    const { name } = req.body

    const department = await prisma.department.create({
        data: { name }
    })

    res.status(201).json({
        message: "Department created successfully",
        data: department
    })
}

export const getDepartments = async (req, res) => {
    const departments = await prisma.department.findMany({
        include: {
            teachers: true,
            courses: true
        }
    })

    res.json(departments)
}

export const getDepartmentById = async (req, res) => {
    const id = Number(req.params.id)

    const department = await prisma.department.findUnique({
        where: { id },
        include: {
            teachers: true,
            courses: true
        }
    })

    res.json(department)
}

export const updateDepartment = async (req, res) => {
    const id = Number(req.params.id)
    const { name } = req.body

    const department = await prisma.department.update({
        where: { id },
        data: { name }
    })

    res.json({
        message: "Department updated successfully",
        data: department
    })
}

export const deleteDepartment = async (req, res) => {
    const id = Number(req.params.id)

    await prisma.department.delete({
        where: { id }
    })

    res.json({
        message: "Department deleted successfully"
    })
}