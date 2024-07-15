"use client";
import Image from 'next/image';

type CldImageProps = {
    src: string,
    alt: string,
    width: number
    height: number
    crop: string
}

const CldImage = (props: CldImageProps) => {
  return (
    <Image {...props} alt={props.alt}  />
  );
}
export default CldImage;

