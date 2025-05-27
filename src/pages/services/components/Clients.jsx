import ProjectItem from '../projectItem/ProjectItem';
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
                            <span className="menu-number menu-number-right">[{(index + 1).toString().padStart(2, '0')}]</span>
                            <li>
                                {client.name} ({client.count})
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Clients;