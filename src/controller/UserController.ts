import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

interface IUser {
    id: number;
    name: string;
    email: string;
}
class UserController {

    async index(req: Request, res: Response): Promise<Response> {

        const user = await prisma.user.findMany()

        return res.json({ user })

    }

    async showById(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        const user = await prisma.user.findUnique({ where: { id: Number(id) } })

        return res.json({ user })
    }

    async create(req: Request, res: Response): Promise<Response> {

        const { name, email }: IUser = req.body

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

    async update(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        const { name, email }: IUser = req.body

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

    async delete(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        const user = await prisma.user.delete({ where: { id: Number(id) } })

        return res.json({ sucess: "usuario deletado com sucesso" })

    }
}

export default new UserController();