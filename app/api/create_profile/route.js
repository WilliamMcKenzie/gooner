import prisma from "../../components/client"

export default async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const name = searchParams.get('name')
    var profile = {}

    // Evaluate initial elo

    var user = await prisma.user.create({
        name : name,
        content: content
    })

    console.log("Genrated")

    return new Response(`/${name}`)
}