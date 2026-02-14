import ProjectItem from '../../projectItem/ProjectItem';
// import '../ServicesList.css';
import '../ServicesList/ServicesList.css';

function AllProjects({ projects, language }) {
    // Ordenar proyectos por el campo 'order'
    const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

    return (
        <div className='services-list'>
            <div className='services-display'>
                <div className="filtered-projects">
                    <div className="projects-grid">
                        {sortedProjects.map((project) => (
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

export default AllProjects;