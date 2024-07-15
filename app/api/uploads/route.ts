import { supabase } from "@/@/lib/supabase";


export async function POST(req: Request) {
    try {
        const requestFormData = await req.formData();
        const values = Object.entries(requestFormData);
        const {name, ...GenreData} = createGalleryUploadsSchema.parse(values);

        let existingGenre = await supabase.gallery.findFirst({
            where: {
                name: name
            }
        });

        if (existingGenre) {
            return new Response("A Genre with that name already exists", { status: 400 })
        }

        const GenreToCreate = {
            ...GenreData,
            name
        }

        const create_Genre = await prisma.genres.create({ data: GenreToCreate }).catch((error) => {
            console.log("error", error);
        })

        return Response.json(JSON.parse(JSON.stringify(create_Genre, (key, value) =>
            typeof value === 'bigint'
                ? value.toString()
                : value // return everything else unchanged
        )));

    } catch (error) {
        console.error(error);
        return new Response(null, { status: 500 })
    }
}