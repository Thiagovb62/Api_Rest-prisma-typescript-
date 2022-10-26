"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)()





class JobController {
    async index(req, res) {

        const jobs = await prisma.job.findMany({
            select: {
                userId: true,
                content: true
            }
        })

        return res.json({ jobs })

    }

    async create(req, res) {

        const { id } = req.params

        const { content } = req.body

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

    async delete(req, res) {

        const { id } = req.params

        const job = await prisma.job.findUnique({ where: { id: Number(id) } })

        if (!job) return res.json({ error: 'Job not found' })

        await prisma.job.delete({ where: { id: Number(id) } })

        return res.json({ sucess: "Trabalho deletado com sucesso" })
    }

}

exports. default = new JobController()
