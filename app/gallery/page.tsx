"use client";

import CldImage from "@/@/components/gallery-image";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface Picture {
    id: string,
    publicId: string
    alt: string
    title: string
}

export default function Gallery() {
    const [pictures, setPictures] = useState<Picture[]>([])

    useEffect(() => {
        setPictures([
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to india"
            },
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to USA"
            },
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to Africa"
            },
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to Africa"
            },
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to Africa"
            },
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to Africa"
            },
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to Africa"
            },
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to Africa"
            },
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to Africa"
            },
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to Africa"
            },
            {
                id: "dssk3263ds68gdu",
                alt: "travel",
                publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
                title: "Travel to Africa"
            },
        ])
    },[])

    return (
        <div className="max-w-8xl mx-auto h-auto bg-white pt-[70px]">
            <div className="flex items-center justify-center px-4">
                {
                    pictures.length === 0 ? (
                        <p className=" text-black text-lg">Our Image gallery is Empty</p>
                    ) : (
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
                    )
                }

            </div>

        </div>
    )
}

