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
                            {/* <span className="menu-number menu-number-right">[{(index + 1).toString().padStart(2, '0')}]</span> */}
                            <li>
                                {sector.name} ({sector.count})
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sectors;