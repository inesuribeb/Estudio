import ProjectItem from '../../projectItem/ProjectItem';
import './Sectors.css'

function Sectors({ t, language, sectors, onSectorClick, filteredProjects, activeSector }) {

    if (activeSector) {
        return (
            <div className='sectors-list'>
                <div className='sectors-display'>
                    <div className="filtered-projects">
                        <div className="projects-grid">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="project-item">
                                    <ProjectItem
                                        project={project}
                                        language={language}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='sectors-list'>
            <div className='sectors-display'>
                <ul>
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className="sector-item clickable"
                            onClick={() => onSectorClick(sector.name)}
                        >

                            <li>
                                {sector.name} <span className="sector-count">({sector.count})</span>
                            </li>
                        </div>
                        // <div className="sector-item clickable" onClick={() => onSectorClick(sector.name)}>
                        //     <li>
                        //         <span className="sector-name">{sector.name}</span>
                        //         <span className="sector-count">({sector.count})</span>
                        //     </li>
                        // </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sectors;