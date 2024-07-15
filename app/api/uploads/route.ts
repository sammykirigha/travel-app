import { parseWithBigInt } from "@/@/lib/parser";
import { supabase } from "@/@/lib/supabase";
import { createGalleryUploadsSchema } from "@/@/lib/validations/galleryUploads";
import crypto from "crypto";

export async function POST(req: Request) {
  try {

    const requestJson = await req.formData();

    const value = Object.fromEntries(requestJson.entries());

    const schemaData = createGalleryUploadsSchema.parse(value);

    if (schemaData?.title === "" && schemaData?.image === null) {
      return new Response("You must have a tile or Image", { status: 400 });
    }

    let image_url = "";

    if (schemaData?.image) {
      const image = (schemaData.image as unknown as File) || null;

      const random_id = crypto.randomBytes(8).toString("hex");

      const file_path = `gallery/${random_id}__${image.name}`;

      const { data, error } = await supabase.storage
        .from("travel_pp_uploads")
        .upload(file_path, image, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) {
        return new Response("An error occurred please try again later", {
          status: 400,
        });
      }

      const { data: imageData } = supabase.storage
        .from("travel_pp_uploads")
        .getPublicUrl(file_path);

      image_url = imageData?.publicUrl;
    }

    const objToCreate = {
      title: schemaData?.title as string,
      created_at: new Date().toISOString(),
      image: image_url,
    };

    const {data, error} = await supabase.from("gallery").insert(objToCreate);

    return Response.json({
      data,
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }
}
