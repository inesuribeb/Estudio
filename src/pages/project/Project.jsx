import { useParams } from 'react-router-dom';
import './Project.css';
import HeroProject from './components/1hero/HeroProject';
import Overview from './components/2overview/Overview';
import Imgs from './components/3imgs/Imgs';
import RelatedProjects from './components/4related/RelatedProjects';
import { useLanguage } from '../../components/contexts/LanguageContext';
import professionalProjects from '../../utils/ProfessionalProjects';

function Project() {
    const { slug } = useParams();
    const { language, t } = useLanguage();
    const project = professionalProjects.find(p => p.slug === slug);

    if (!project) return <p>{t('projectNotFound')}</p>;

    return (
        <section className='project-single-page'>
            <HeroProject project={project} language={language} t={t} />
            <Overview project={project} language={language} t={t} />
            <Imgs project={project} language={language} t={t} />
            <RelatedProjects project={project} projects={professionalProjects} language={language} t={t} />
        </section>
    )
}

export default Project;