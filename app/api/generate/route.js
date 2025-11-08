export default function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const name = searchParams.get('name')
    var content = {}

    // make a new "portfolio", using content and name
    // add it to mongodb

    


    return new Response(`/${name}`)
}