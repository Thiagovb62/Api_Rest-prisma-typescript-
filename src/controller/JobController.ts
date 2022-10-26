import { PrismaClient, User } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

interface IJob {
    content: string
}

class JobController {
    async index(req: Request, res: Response): Promise<Response> {

        const jobs = await prisma.job.findMany({
            select: {
                userId: true,
                content: true
            }
        })

        return res.json({ jobs })

    }

    async create(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        const { content }: IJob = req.body

        const user = await prisma.user.findUnique({ where: { id: Number(id) } })

        if (!user) {
            return res.json({ error: "user not found" })
        }

        const job = await prisma.job.create({
            data: {
                content: content,
                userId: user.id
            }
        })

        return res.json({ job })
    }

}

export default new JobController()
