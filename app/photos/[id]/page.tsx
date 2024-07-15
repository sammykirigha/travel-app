import CldImage from '@/@/components/gallery-image';
import { Picture } from '@/@/app/gallery/page';
import { Modal } from '../../@modal/(.)photos/[id]/modal';

export default function PhotoModal({ params: { id: photoId }}: {params: { id: string };}) {
    const pictures:Picture[] = []

    const picture = pictures.find(({ id }) => id === photoId);

    if (!picture) return <Modal>No Image found</Modal>

    return (
        <Modal>
            <CldImage
                src={picture.publicId}
                width={730}
                height={900}
                crop="fill"
                alt={picture.alt}
            />
        </Modal>
    );
}

