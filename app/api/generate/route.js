import prisma from "../../components/client"

export default async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const name = searchParams.get('name')
    var content = {}

    var portfolio = await prisma.portfolio.create({
        name : name,
        content: content
    })

    console.log("Genrated")

    return new Response(`/${name}`)
}