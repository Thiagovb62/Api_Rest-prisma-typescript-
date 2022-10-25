import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

module.exports = {

    async create(req: Request, res: Response):Promise<Response> {

    const {name,email} = req.body
    
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
         return res.json({ user})
    }

}


