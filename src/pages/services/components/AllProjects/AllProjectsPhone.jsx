import ProjectItem from '../../projectItem/ProjectItem';
// import './AllProjectsPhone.css';
// import '../ServicesListPhone.css'
import '../ServicesList/ServicesListPhone.css';



function AllProjectsPhone({ projects, language }) {
    // Ordenar proyectos por el campo 'order'
    const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

    return (
        <div className='phone-all-projects'>
            <div className='phone-all-projects-display'>
                <div className="phone-all-filtered-projects">
                    <div className="phone-all-projects-grid">
                        {sortedProjects.map((project) => (
                            <div key={project.id} className="phone-all-project-item">
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

export default AllProjectsPhone;