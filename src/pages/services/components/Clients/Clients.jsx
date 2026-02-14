import ProjectItem from '../../projectItem/ProjectItem';
import './Clients.css'

function Clients({ t, language, clients, onClientClick, filteredProjects, activeClient }) {
    
    if (activeClient) {
        return (
            <div className='clients-list'>
                <div className='clients-display'>
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
        <div className='clients-list'>
            <div className='clients-display'>
                <ul>
                    {clients.map((client, index) => (
                        <div 
                            key={index} 
                            className="client-item clickable"
                            onClick={() => onClientClick(client.name)}
                        >
                            <li>
                                {client.name} <span className="sector-count">({client.count})</span>
                            </li>
                        </div>
                        // <div
                        //     key={index}
                        //     className="sector-item clickable"
                        //     onClick={() => onSectorClick(sector.name)}
                        // >

                        //     <li>
                        //         {sector.name} <span className="sector-count">({sector.count})</span>
                        //     </li>
                        // </div>
                        
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Clients;