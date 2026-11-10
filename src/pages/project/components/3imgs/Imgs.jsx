import CustomGalleries from './customGalleries/CustomGalleries';
import GenericGallery from './genericGallery/GenericGallery';

function Imgs({ project, language, t }) {
    const Custom = project.customGallery ? CustomGalleries[project.slug] : null;
    const Gallery = Custom ?? GenericGallery;

    return <Gallery project={project} language={language} t={t} />;
}

export default Imgs;