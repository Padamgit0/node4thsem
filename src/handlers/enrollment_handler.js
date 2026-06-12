import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export const CreateEnrollment = async (req, res) => {
    try {
        const { StudentId, CourseId } = req.body

        const enrollment = await prisma.enrollment.create({
            data: {
                StudentId,
                CourseId
            }
        })

        res.status(201).json({
            message: "Enrollment created successfully",
            data: enrollment
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getEnrollments = async (req, res) => {
    try {
        const enrollments = await prisma.enrollment.findMany({
            include: {
                student: true,
                course: true
            }
        })

        res.json(enrollments)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getEnrollmentById = async (req, res) => {
    try {
        const id = Number(req.params.id)

        const enrollment = await prisma.enrollment.findUnique({
            where: {
                id
            },
            include: {
                student: true,
                course: true
            }
        })

        res.json(enrollment)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}