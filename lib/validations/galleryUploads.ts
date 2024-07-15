import { File } from "buffer";
import { z } from "zod";

export const createGalleryUploadsSchema = z.object({
    title: z.string().optional(),
    image: z.instanceof(File)
})