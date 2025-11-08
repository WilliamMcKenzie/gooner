import { PrismaClient } from '../../generated/prisma/client'
const prisma = new PrismaClient()

export default async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const name = searchParams.get('name')
    const images = searchParams.get('images')
    const description = searchParams.get('description')
    var profile = {
        "username" : name,
        "images" : images,
        "description" : description
    }

    // Evaluate initial elo

    var user = await prisma.user.create({
        name : name,
        content: content,
        profile: profile
    })

    console.log("Genrated")

    await prisma.$disconnect()
    return new Response(`/${name}`)
}