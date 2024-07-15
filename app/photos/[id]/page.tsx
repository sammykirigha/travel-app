import CldImage from '@/@/components/gallery-image';
import { Picture } from '@/@/app/gallery/page';
import Modal from '../../@modal/(.)photos/[id]/modal';

function PhotoModal({ params: { id: photoId } }: { params: { id: string }; }) {
    const pictures: Picture[] = [
        {
            id: "dssk3263ds68gdu",
            alt: "travel",
            publicId: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHjr1I8fFMaEF29fZmdser0dky4kwqU8xaO56oDPMo_2SSKSwDOVnjZI_3egZDdEUpz2JyYG8nnuKPF0LjZfrtmi64Xmr8tvBVZZHm4n6SSeivTx3ZhPA8-EQs3vvizg3FAqJ_Vaicwy_91k-Ni43fGrT_D16lTtgHAmmjRXrSx55yy8j4ioJ2euVJLY/s1600/banner2%20copy.png",
            title: "Travel to india"
        }
    ]


    const picture = pictures.find(({ id }) => id === photoId);

    if (!picture) return <Modal>No Image found</Modal>

    return (
        <div className="flex bg-red-500 h-screen">
        <Modal>
            <CldImage
                src={picture.publicId}
                width={730}
                height={900}
                crop="fill"
                alt={picture.alt}
            />
        </Modal>
        </div>
    );
}

export default PhotoModal;

