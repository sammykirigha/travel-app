"use client";

import CldImage from "@/@/components/gallery-image";
import Link from "next/link";
import { useState } from "react";

export interface Picture {
    id: string,
    publicId: string
    alt: string
    title: string
}

export default function Home() {
    const [pictures, setPictures] = useState<Picture[]>([])

    return (
        <div className="max-w-7xl">
            <h2 className="sr-only">Image Gallery</h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {pictures.map(picture => {
                    return (
                        <li key={picture.id}>
                            <Link
                                className="relative group"
                                key={picture.id}
                                href={`/photos/${picture.id}`}
                                passHref
                            >
                                <CldImage
                                    src={picture.publicId}
                                    width={730}
                                    height={900}
                                    crop="fill"
                                    alt={picture.alt}
                                />
                                <div className="lg:opacity-0 lg:group-hover:opacity-100 
                        transition-opacity absolute bottom-0 left-0
                        w-full bg-gradient-to-t from-zinc-900 px-5 py-4">
                                    <h3 className="text-white text-3xl lg:translate-y-2 
                          lg:group-hover:translate-y-0 
                          transition-transform">
                                        {picture.title}
                                    </h3>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

