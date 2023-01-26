import Header from '../main-module/layouts/header';
import Footer from '../main-module/layouts/footer';
import GalleryPhotos from '../plugins/gallery/index';

const Gallery = () => {
    return (
        <>
            <Header />
                <GalleryPhotos />
            <Footer />
        </>
    )
}

export default Gallery;