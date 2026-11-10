import './GenericGallery.css';

function GenericGallery({ project }) {
    const images = (project.gallery ?? []).slice(0, 7);
    if (images.length === 0) return null;

    return (
        <section className='generic-gallery'>
            {images.map((img, index) => (
                <img key={index} src={img.src} alt={img.alt} loading="lazy" />
            ))}
        </section>
    );
}

export default GenericGallery;