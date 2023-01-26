import { useState } from 'react';
import FsLightbox from "fslightbox-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import JsonPhotos from './photos/photos.json';

import './style.scss';

const Gallery = () => {
    const [toggler, setToggler] = useState(false);
    const [slide, setSlide] = useState("")

    const arrPhotos = JsonPhotos.map(photo => {
        return <img key={photo.alt} src={photo.src} alt={photo.alt} className="img-thumbnail gallery-img m-1" onClick={() => {
            setToggler(!toggler)
            setSlide(photo.src)
        }} />
    })

    return (
        <>
            <h2 className='text-center m-5 font-weight-lighter'>Photo Gallery</h2>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 920: 3, 1200: 4}}>
                <Masonry className='p-2'>
                    {
                        arrPhotos
                    }
                </Masonry>
            </ResponsiveMasonry>
			 <FsLightbox
				toggler={toggler}
				sources={JsonPhotos.map(photo => photo.src)}
                source={slide}
			/>
        </>
    )
}

export default Gallery;