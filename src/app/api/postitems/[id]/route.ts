import dbConnect from "../../../../../config/db";
import PostItem from "../../../../../models/PostItem";

dbConnect()

export async function GET(_request:Request, {params}: {params: {id: string}}) {
    try {
        const postItem = await PostItem.findById(params.id).select('-__v');
    return Response.json(postItem)
    } catch (error) {
        return new Response(JSON.stringify({message: 'NO item found in this ID'}),
    { status: 404 }
    )
    }
}