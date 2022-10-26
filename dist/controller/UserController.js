"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

const prisma = new (0, _client.PrismaClient)()






class UserController {

    async index(req, res) {

        const user = await prisma.user.findMany()

        return res.json({ user })

    }

    async showById(req, res) {

        const { id } = req.params

        const user = await prisma.user.findUnique({ where: { id: Number(id) } })

        return res.json({ user })
    }

    async create(req, res) {

        const { name, email } = req.body

        let user = await prisma.user.findUnique({ where: { email } })

        if (user) {
            return res.json({ error: "ja existe um Usuário com este email" })
        }
        user = await prisma.user.create({
            data: {
                name,
                email,
            },
        })
        return res.json({ user })
    }

    async update(req, res) {

        const { id } = req.params

        const { name, email } = req.body

        let user = await prisma.user.findUnique({ where: { id: Number(id) } })

        if (!user) {
            return res.json({ error: "User not found" })
        }
        user = await prisma.user.update({
            where: { id: Number(id) }, data: {
                name,
                email,
            }
        })

        return res.json({ sucess: "usuario atualizado com sucesso" })
    }

    async delete(req, res) {

        const { id } = req.params

        const user = await prisma.user.delete({ where: { id: Number(id) } })

        return res.json({ sucess: "usuario deletado com sucesso" })

    }
}

exports. default = new UserController();