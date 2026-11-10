import { useMemo } from 'react';
import ProjectItem from '../../../services/projectItem/ProjectItem';
import professionalProjects from '../../../../utils/ProfessionalProjects';
import './RelatedProjects.css';

const MAX_RELATED = 4;

const countMatches = (a = [], b = []) => a.filter((item) => b.includes(item)).length;

function RelatedProjects({ project, language, t }) {
    const related = useMemo(() => {
        const candidates = professionalProjects.filter(
            (p) => p.slug !== project.slug && !p.soon
        );

        // 1. Los elegidos a mano en relatedProjects van primero
        const manualSlugs = (project.relatedProjects ?? []).filter(Boolean);
        const manual = manualSlugs
            .map((slug) => candidates.find((p) => p.slug === slug))
            .filter(Boolean);

        // 2. El resto, ordenado por coincidencias
        const scored = candidates
            .filter((p) => !manualSlugs.includes(p.slug))
            .map((p) => {
                const sectorScore = countMatches(p.sector?.es, project.sector?.es);
                const serviceScore = countMatches(p.services?.es, project.services?.es);
                return { p, score: sectorScore * 100 + serviceScore };
            })
            .filter(({ score }) => score > 0)
            .sort((a, b) => b.score - a.score || a.p.order - b.p.order)
            .map(({ p }) => p);

        return [...manual, ...scored].slice(0, MAX_RELATED);
    }, [project]);

    if (related.length === 0) return null;

    return (
        <section className='related-projects-section'>
            <h2>{t('relatedProjects')}</h2>
            <div className='related-projects-grid'>
                {related.map((p) => (
                    <ProjectItem key={p.id} project={p} language={language} />
                ))}
            </div>
        </section>
    );
}

export default RelatedProjects;